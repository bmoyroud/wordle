import React, { useEffect, useState } from 'react';
import './style.css';

import Header from './components/Header';
import Grid from './components/grid/Grid';
import Keyboard from './components/keyboard/Keyboard';

import {
  checkWord,
  isCompleteWord,
  isValidWord,
  isSolution,
} from './helpers/word';
import { checkStatuses } from './helpers/status';

export default function App() {
  const [attempts, setAttempts] = useState([]);
  const [evaluations, setEvaluations] = useState([]);
  const [currentWord, setCurrentWord] = useState('');
  const [allStatuses, setStatuses] = useState({});
  const [isGameOver, setIsGameOver] = useState(false);

  const onChar = (key) => {
    const isComplete = isCompleteWord(currentWord);
    if (isComplete) return;

    const word = `${currentWord}${key.toLowerCase()}`;
    setCurrentWord(word);
  };

  const onDelete = () => {
    const word = currentWord.slice(0, -1);
    setCurrentWord(word);
  };

  const onEnter = () => {
    const isComplete = isCompleteWord(currentWord);
    if (!isComplete) return;

    const isValid = isValidWord(currentWord);
    if (!isValid) return;

    const solution = 'empty';
    const isGameOver = isSolution(currentWord, solution);
    const [evaluation, statuses] = checkWord(currentWord, solution);

    setEvaluations([...evaluations, evaluation]);
    setStatuses(checkStatuses(allStatuses, statuses));
    setAttempts([...attempts, currentWord]);
    setCurrentWord('');
    setIsGameOver(isGameOver);
  };

  useEffect(() => {
    const listener = (e) => {
      if (isGameOver) return;
      const { key, keyCode } = e;
      if (key === 'Backspace') {
        onDelete();
      } else if (key === 'Enter') {
        onEnter();
      } else if (keyCode >= 65 && keyCode <= 90) {
        onChar(key);
      }
    };
    window.addEventListener('keyup', listener);
    return () => window.removeEventListener('keyup', listener);
  });

  return (
    <div>
      <Header />

      <div className="game">
        <Grid
          attempts={attempts}
          evaluations={evaluations}
          currentWord={currentWord}
        />
        <Keyboard
          statuses={allStatuses}
          isGameOver={isGameOver}
          onChar={onChar}
          onDelete={onDelete}
          onEnter={onEnter}
        />
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import './style.css';

import Header from './components/Header';
import Grid from './components/grid/Grid';
import Keyboard from './components/keyboard/Keyboard';

import { checkWord, isCompleteWord, isValidWord } from './helpers/word';

export default function App() {
  const [attempts, setAttempts] = useState([]);
  const [evaluations, setEvaluations] = useState([]);
  const [currentWord, setCurrentWord] = useState('');

  const onChar = (key) => {
    const isComplete = isCompleteWord(currentWord);
    if (isComplete) return;

    console.log('Add letter to word');
    const word = `${currentWord}${key.toLowerCase()}`;
    setCurrentWord(word);
  };

  const onDelete = () => {
    console.log('Delete last letter');
    const word = currentWord.slice(0, -1);
    setCurrentWord(word);
  };

  const onEnter = () => {
    const isComplete = isCompleteWord(currentWord);
    if (!isComplete) return;

    console.log('Confirm word');
    const isValid = isValidWord(currentWord);
    if (!isValid) return;

    const solution = 'empty';
    const evaluation = checkWord(currentWord, solution);

    setEvaluations([...evaluations, evaluation]);
    setAttempts([...attempts, currentWord]);
    setCurrentWord('');
  };

  useEffect(() => {
    const listener = (e) => {
      console.log(e);
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
        <Keyboard />
      </div>
    </div>
  );
}

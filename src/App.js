import React, { useEffect, useState } from 'react';
import './style.css';

import { MAX_ATTEMPTS } from './config';

import StatsModal from './components/modals/StatsModal';
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
import { calculateStatistics } from './helpers/statistics';
import { saveGame, loadGame, saveStats, loadStats } from './helpers/storage';

export default function App() {
  const game = loadGame();
  // TODO: move loading elsewhere?
  // console.log(game);
  const [attempts, setAttempts] = useState(game.attempts || []);
  const [evaluations, setEvaluations] = useState(game.evaluations || []);
  const [currentWord, setCurrentWord] = useState(game.currentWord || '');
  const [allStatuses, setStatuses] = useState(game.allStatuses || {});
  const [isGameOver, setIsGameOver] = useState(game.isGameOver || false);

  const [statistics, setStatistics] = useState(loadStats);

  // modals
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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

    const [evaluation, statuses] = checkWord(currentWord, solution);
    // note: order matters
    setEvaluations([...evaluations, evaluation]);
    setStatuses(checkStatuses(allStatuses, statuses));

    const updatedAttempts = [...attempts, currentWord];
    const numAttempts = updatedAttempts.length;
    const isLost = numAttempts === MAX_ATTEMPTS;
    const isWon = isSolution(currentWord, solution);
    const isGameOver = isWon || isLost;
    setAttempts(updatedAttempts);
    setIsGameOver(isGameOver);

    if (isGameOver) {
      const stats = calculateStatistics(statistics, isWon, numAttempts);
      setStatistics(stats);
      saveStats(stats);
    }

    setCurrentWord('');
  };

  useEffect(() => {
    saveGame({
      attempts,
      evaluations,
      currentWord: '',
      allStatuses,
      isGameOver,
    });
  }, [attempts, isGameOver]);

  useEffect(() => {
    console.log('isGameOver', isGameOver);
    if (isGameOver) {
      // resetGame
      setAttempts([]);
      setEvaluations([]);
      setCurrentWord('');
      setStatuses({});
      setIsGameOver(false);
    }
  }, [isGameOver]);

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
    <>
      {isModalOpen && (
        <StatsModal closeModal={closeModal} statistics={statistics} />
      )}

      <Header openModal={openModal} />

      <div className="game">
        <Grid
          isGameOver={isGameOver}
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
    </>
  );
}

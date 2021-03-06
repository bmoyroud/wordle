import React from 'react';

import { MAX_ATTEMPTS } from '../../config';
import CompletedRow from './rows/CompletedRow';
import CurrentRow from './rows/CurrentRow';
import EmptyRow from './rows/EmptyRow';

const calculateNumEmptyRows = (numAttempts, maxAttempts) =>
  numAttempts < maxAttempts ? maxAttempts - numAttempts - 1 : 0;

export default function Grid({
  isGameOver,
  attempts,
  evaluations,
  currentWord,
}) {
  const completed = attempts.map((attempt, i) => (
    <CompletedRow attempt={attempt} evaluation={evaluations[i]} />
  ));
  const numEmpties = calculateNumEmptyRows(attempts.length, MAX_ATTEMPTS);
  const empties = new Array(numEmpties).fill().map(() => <EmptyRow />);

  return (
    <table>
      <tbody>
        {completed}
        {!isGameOver && <CurrentRow currentWord={currentWord} />}
        {empties}
      </tbody>
    </table>
  );
}

import React from 'react';

import { MAX_ATTEMPTS } from '../../config';
import CompletedRow from './CompletedRow';
import CurrentRow from './CurrentRow';
import EmptyRow from './EmptyRow';

const calculateNumEmptyRows = (numAttempts, maxAttempts) =>
  numAttempts < maxAttempts ? maxAttempts - numAttempts - 1 : 0;

export default function Grid({ attempts, evaluations, currentWord }) {
  const completed = attempts.map((attempt, i) => (
    <CompletedRow attempt={attempt} evaluation={evaluations[i]} />
  ));
  const numEmpties = calculateNumEmptyRows(attempts.length, MAX_ATTEMPTS);
  const empties = new Array(numEmpties).fill().map(() => <EmptyRow />);

  return (
    <table>
      <tbody>
        {completed}
        <CurrentRow currentWord={currentWord} />
        {empties}
      </tbody>
    </table>
  );
}

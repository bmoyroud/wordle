import React, { useState } from 'react';

import { MAX_ATTEMPTS } from '../../config';
import CompletedRow from './CompletedRow';
import CurrentRow from './CurrentRow';
import EmptyRow from './EmptyRow';

const calculateNumEmptyRows = (numAttempts, maxAttempts) =>
  numAttempts < maxAttempts ? maxAttempts - numAttempts - 1 : 0;

export default function Grid() {
  const [attempts] = useState(['chalk', 'loved']);
  const [currentWord] = useState('empt');

  const completed = attempts.map((attempt) => (
    <CompletedRow attempt={attempt} />
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

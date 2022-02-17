import React, { useState } from 'react';

import { MAX_ATTEMPTS } from '../../config';
import CompletedRow from './CompletedRow';
import CurrentRow from './CurrentRow';
import EmptyRow from './EmptyRow';

export default function Grid() {
  const [attempts] = useState(['chalk', 'loved']);
  const [currentWord] = useState('empt');

  const completed = attempts.map((attempt) => (
    <CompletedRow attempt={attempt} />
  ));
  const empties = new Array(MAX_ATTEMPTS).fill().map(() => <EmptyRow />);

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

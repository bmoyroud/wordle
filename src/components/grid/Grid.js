import React, { useState } from 'react';

import { MAX_ATTEMPTS } from '../../config';
import CompletedRow from './CompletedRow';
import CurrentRow from './CurrentRow';
import EmptyRow from './EmptyRow';

export default function Grid() {
  const [attempts] = useState([]);

  const completed = attempts.map(() => <CompletedRow />);
  const empties = new Array(MAX_ATTEMPTS).fill().map(() => <EmptyRow />);

  return (
    <table>
      <tbody>
        {completed}
        <CurrentRow />
        {empties}
      </tbody>
    </table>
  );
}

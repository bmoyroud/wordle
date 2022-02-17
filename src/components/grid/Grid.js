import React from 'react';

import { MAX_ATTEMPTS } from '../../config';
import CompletedRow from './CompletedRow';
import CurrentRow from './CurrentRow';
import EmptyRow from './EmptyRow';

export default function Grid() {
  const rows = new Array(MAX_ATTEMPTS).fill().map(() => <EmptyRow />);

  return (
    <table>
      <tbody>
        <CompletedRow />
        <CurrentRow />
        {rows}
      </tbody>
    </table>
  );
}

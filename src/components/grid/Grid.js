import React from 'react';

import { MAX_ATTEMPTS } from '../../config';
import CompletedRow from './CompletedRow';
import EmptyRow from './EmptyRow';

export default function Grid() {
  const rows = new Array(MAX_ATTEMPTS).fill().map(() => <EmptyRow />);

  return (
    <table>
      <tbody>
        <CompletedRow />
        <tr>
          <td>c</td>
          <td>h</td>
          <td>a</td>
          <td></td>
          <td></td>
        </tr>
        {rows}
      </tbody>
    </table>
  );
}

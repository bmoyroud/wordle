import React from 'react';

import { MAX_ATTEMPTS } from '../../config';
import Row from './Row';

export default function Grid() {
  const rows = new Array(MAX_ATTEMPTS).fill().map(() => <Row />);

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}

import React from 'react';

import { MAX_ATTEMPTS } from '../../config';
import Row from './Row';

export default function Grid() {
  const rows = new Array(MAX_ATTEMPTS).fill().map(() => <Row />);

  return (
    <table>
      <tbody>
        <tr>
          <td className="absent">e</td>
          <td className="present">m</td>
          <td className="correct">p</td>
          <td>t</td>
          <td>y</td>
        </tr>
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

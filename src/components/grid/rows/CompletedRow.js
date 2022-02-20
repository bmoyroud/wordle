import React from 'react';

import { MAX_WORD_LENGTH } from '../../../config';
import Row from './Row';

export default function CompletedRow({ attempt, evaluation }) {
  const cells = new Array(MAX_WORD_LENGTH)
    .fill()
    .map((i) => <td className={evaluation[i]}>{attempt[i]}</td>);
  return <Row>{cells}</Row>;
}

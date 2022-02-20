import React from 'react';

import { MAX_WORD_LENGTH } from '../../../config';
import Row from './Row';

export default function CurrentRow({ currentWord }) {
  const cells = new Array(MAX_WORD_LENGTH)
    .fill()
    .map((i) => <td>{currentWord[i]}</td>);
  return <Row>{cells}</Row>;
}

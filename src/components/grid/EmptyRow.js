import React from 'react';
import { MAX_WORD_LENGTH } from '../../config';

export default function EmptyRow() {
  const cells = new Array(MAX_WORD_LENGTH).fill().map((_) => <td></td>);
  return <tr>{cells}</tr>;
}

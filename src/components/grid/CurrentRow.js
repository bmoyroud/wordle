import React from 'react';
import { MAX_WORD_LENGTH } from '../../config';

export default function CurrentRow({ currentWord }) {
  const cells = new Array(MAX_WORD_LENGTH)
    .fill()
    .map((i) => <td>{currentWord[i]}</td>);
  return <tr>{cells}</tr>;
}

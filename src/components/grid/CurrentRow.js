import React from 'react';

export default function CurrentRow({ currentWord }) {
  return (
    <tr>
      <td>{currentWord[0]}</td>
      <td>{currentWord[1]}</td>
      <td>{currentWord[2]}</td>
      <td>{currentWord[3]}</td>
      <td>{currentWord[4]}</td>
    </tr>
  );
}

import React from 'react';
import Key from './Key';

export default function Keyboard({ statuses, onChar, onDelete, onEnter }) {
  const onClick = (key) => {
    if (key === 'Del') {
      onDelete();
    } else if (key === 'Enter') {
      onEnter();
    } else {
      onChar(key);
    }
  };

  const values = [
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'enter',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    'del',
  ];

  const keys = values.map((val) => (
    <Key status={statuses[val]} value={val} onClick={() => onClick(val)} />
  ));

  return <div className="keyboard">{keys}</div>;
}

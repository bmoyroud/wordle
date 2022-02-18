import React from 'react';
import Key from './Key';

export default function Keyboard({ onChar, onDelete, onEnter }) {
  const onClick = (e) => {
    const key = e.target.innerText;
    console.log(key);

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

  const keys = values.map((val) => <Key value={val} onClick={onClick} />);

  return <div className="keyboard">{keys}</div>;
}

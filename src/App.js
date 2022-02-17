import React, { useEffect, useState } from 'react';
import './style.css';

import Header from './components/Header';
import Grid from './components/grid/Grid';
import Keyboard from './components/Keyboard';

export default function App() {
  const [attempts] = useState(['chalk', 'loved']);
  const [currentWord, setCurrentWord] = useState('');

  const onChar = (key) => {
    const isWordComplete = currentWord.length === 5;
    if (isWordComplete) return;

    console.log('Add letter to word');
    const word = `${currentWord}${key.toLowerCase()}`;
    setCurrentWord(word);
  };

  const onDelete = () => {
    console.log('Delete last letter');
    const word = currentWord.slice(0, -1);
    setCurrentWord(word);
  };

  useEffect(() => {
    const listener = (e) => {
      console.log(e);
      const { key, keyCode } = e;
      if (key === 'Backspace') {
        onDelete();
      } else if (key === 'Enter') {
        console.log('Confirm word');
      } else if (keyCode >= 65 && keyCode <= 90) {
        onChar(key);
      }
    };
    window.addEventListener('keyup', listener);
    return () => window.removeEventListener('keyup', listener);
  });

  return (
    <div>
      <Header />

      <div className="game">
        <Grid attempts={attempts} currentWord={currentWord} />
        <Keyboard />
      </div>
    </div>
  );
}

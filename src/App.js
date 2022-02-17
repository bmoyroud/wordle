import React, { useEffect, useState } from 'react';
import './style.css';

import Header from './components/Header';
import Grid from './components/grid/Grid';
import Keyboard from './components/Keyboard';

export default function App() {
  const [attempts] = useState(['chalk', 'loved']);
  const [currentWord] = useState('empt');

  useEffect(() => {
    const listener = (e) => {
      console.log(e);
      const { key, keyCode } = e;
      if (key === 'Backspace') {
        console.log('Delete letter');
      } else if (key === 'Enter') {
        console.log('Confirm word');
      } else if (keyCode >= 65 && keyCode <= 90) {
        console.log('Add letter to word');
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

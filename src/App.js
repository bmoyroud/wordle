import React, { useState } from 'react';
import './style.css';

import Header from './components/Header';
import Grid from './components/grid/Grid';
import Keyboard from './components/Keyboard';

export default function App() {
  const [attempts] = useState(['chalk', 'loved']);
  const [currentWord] = useState('empt');

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

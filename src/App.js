import React from 'react';
import './style.css';

import Header from './components/Header';
import Grid from './components/grid/Grid';
import Keyboard from './components/Keyboard';

export default function App() {
  return (
    <div>
      <Header />

      <div className="game">
        <Grid />
        <Keyboard />
      </div>
    </div>
  );
}

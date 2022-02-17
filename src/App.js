import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <div className="header">
        <button className="help">Help</button>
        <div className="title">Wordle</div>
        <button className="stats">Stats</button>
        <button className="settings">Settings</button>
      </div>
    </div>
  );
}

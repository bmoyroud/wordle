import React from 'react';

export default function Header({ openModal }) {
  return (
    <div className="header">
      <button className="help">Help</button>
      <div className="title">Wordle</div>
      <button className="stats" onClick={openModal}>
        Stats
      </button>
      <button className="settings">Settings</button>
    </div>
  );
}

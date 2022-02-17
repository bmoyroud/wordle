import React from 'react';

export default function Header() {
  return (
    <div className="header">
      <button className="help">Help</button>
      <div className="title">Wordle</div>
      <button className="stats">Stats</button>
      <button className="settings">Settings</button>
    </div>
  );
}

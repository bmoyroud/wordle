import React from 'react';

export default function Key({ value, onClick }) {
  return (
    <button className="key" onClick={onClick}>
      {value}
    </button>
  );
}

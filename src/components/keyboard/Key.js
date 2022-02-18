import React from 'react';

export default function Key({ status, value, onClick }) {
  const className = status !== undefined ? `key ${status}` : 'key';
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}

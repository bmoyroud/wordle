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

  return (
    <div className="keyboard">
      <Key value={'q'} onClick={onClick} />
      <Key value={'w'} onClick={onClick} />
      <Key value={'e'} onClick={onClick} />
      <Key value={'r'} onClick={onClick} />
      <Key value={'t'} onClick={onClick} />
      <Key value={'y'} onClick={onClick} />
      <Key value={'u'} onClick={onClick} />
      <Key value={'i'} onClick={onClick} />
      <Key value={'o'} onClick={onClick} />
      <Key value={'p'} onClick={onClick} />

      <Key value={'a'} onClick={onClick} />
      <Key value={'s'} onClick={onClick} />
      <Key value={'d'} onClick={onClick} />
      <Key value={'f'} onClick={onClick} />
      <Key value={'g'} onClick={onClick} />
      <Key value={'h'} onClick={onClick} />
      <Key value={'j'} onClick={onClick} />
      <Key value={'k'} onClick={onClick} />
      <Key value={'l'} onClick={onClick} />

      <Key value={'Enter'} onClick={onClick} />
      <Key value={'z'} onClick={onClick} />
      <Key value={'x'} onClick={onClick} />
      <Key value={'c'} onClick={onClick} />
      <Key value={'v'} onClick={onClick} />
      <Key value={'b'} onClick={onClick} />
      <Key value={'n'} onClick={onClick} />
      <Key value={'m'} onClick={onClick} />
      <Key value={'Del'} onClick={onClick} />
    </div>
  );
}

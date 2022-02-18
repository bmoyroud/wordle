import React from 'react';
import Key from './Key';

export default function Keyboard() {
  return (
    <div className="keyboard">
      <Key value={'q'} />
      <Key value={'w'} />
      <Key value={'e'} />
      <Key value={'r'} />
      <Key value={'t'} />
      <Key value={'y'} />
      <Key value={'u'} />
      <Key value={'i'} />
      <Key value={'o'} />
      <Key value={'p'} />

      <Key value={'a'} />
      <Key value={'s'} />
      <Key value={'d'} />
      <Key value={'f'} />
      <Key value={'g'} />
      <Key value={'h'} />
      <Key value={'j'} />
      <Key value={'k'} />
      <Key value={'l'} />

      <Key value={'Enter'} />
      <Key value={'z'} />
      <Key value={'x'} />
      <Key value={'c'} />
      <Key value={'v'} />
      <Key value={'b'} />
      <Key value={'n'} />
      <Key value={'m'} />
      <Key value={'Del'} />
    </div>
  );
}

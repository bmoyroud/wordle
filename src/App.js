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

      <div className="game">
        <table>
          <tbody>
            <tr>
              <td className="absent">e</td>
              <td className="present">m</td>
              <td className="correct">p</td>
              <td>t</td>
              <td>y</td>
            </tr>
            <tr>
              <td>e</td>
              <td>m</td>
              <td>p</td>
              <td>t</td>
              <td>y</td>
            </tr>
            <tr>
              <td>e</td>
              <td>m</td>
              <td>p</td>
              <td>t</td>
              <td>y</td>
            </tr>
            <tr>
              <td>e</td>
              <td>m</td>
              <td>p</td>
              <td>t</td>
              <td>y</td>
            </tr>
            <tr>
              <td>e</td>
              <td>m</td>
              <td>p</td>
              <td>t</td>
              <td>y</td>
            </tr>
            <tr>
              <td>e</td>
              <td>m</td>
              <td>p</td>
              <td>t</td>
              <td>y</td>
            </tr>
          </tbody>
        </table>

        <div className="keyboard">
          <button className="key">q</button>
          <button className="key">w</button>
          <button className="key">e</button>
          <button className="key">r</button>
          <button className="key">t</button>
          <button className="key">y</button>
          <button className="key">u</button>
          <button className="key">i</button>
          <button className="key">o</button>
          <button className="key">p</button>

          <button className="key">a</button>
          <button className="key">s</button>
          <button className="key">d</button>
          <button className="key">f</button>
          <button className="key">g</button>
          <button className="key">h</button>
          <button className="key">j</button>
          <button className="key">k</button>
          <button className="key">l</button>

          <button className="key">Enter</button>
          <button className="key">z</button>
          <button className="key">x</button>
          <button className="key">c</button>
          <button className="key">v</button>
          <button className="key">b</button>
          <button className="key">n</button>
          <button className="key">m</button>
          <button className="key">Del</button>
        </div>
      </div>
    </div>
  );
}

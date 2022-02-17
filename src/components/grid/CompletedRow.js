import React from 'react';

export default function CompletedRow({ attempt }) {
  return (
    <tr>
      <td className="absent">{attempt[0]}</td>
      <td className="present">{attempt[1]}</td>
      <td className="correct">{attempt[2]}</td>
      <td>{attempt[3]}</td>
      <td>{attempt[4]}</td>
    </tr>
  );
}

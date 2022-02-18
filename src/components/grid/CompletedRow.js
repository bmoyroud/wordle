import React from 'react';

export default function CompletedRow({ attempt, evaluation }) {
  return (
    <tr>
      <td className={evaluation[0]}>{attempt[0]}</td>
      <td className={evaluation[1]}>{attempt[1]}</td>
      <td className={evaluation[2]}>{attempt[2]}</td>
      <td className={evaluation[3]}>{attempt[3]}</td>
      <td className={evaluation[4]}>{attempt[4]}</td>
    </tr>
  );
}

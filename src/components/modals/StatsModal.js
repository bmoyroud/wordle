import React from 'react';

export default function StatsModal({ statistics }) {
  const { played, wins, currentStreak, maxStreak } = statistics;
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close">x</button>
        <div className="modal-title">Statistics</div>
        <div className="modal-statistics">
          <div className="modal-statistic">
            <span>{played}</span>
            <span>Played</span>
          </div>
          <div className="modal-statistic">
            <span>100</span>
            <span>Win %</span>
          </div>
          <div className="modal-statistic">
            <span>{currentStreak}</span>
            <span>Current Streak</span>
          </div>
          <div className="modal-statistic">
            <span>{maxStreak}</span>
            <span>Max Streak</span>
          </div>
        </div>
      </div>
    </div>
  );
}

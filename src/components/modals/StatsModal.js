import React from 'react';
import { calculateWinPercentage } from '../../helpers/statistics';

export default function StatsModal({ closeModal, statistics }) {
  const { played, wins, currentStreak, maxStreak } = statistics;
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content">
        <button className="modal-close" onClick={closeModal}>
          x
        </button>
        <div className="modal-title">Statistics</div>
        <div className="modal-statistics">
          <div className="modal-statistic">
            <span>{played}</span>
            <span>Played</span>
          </div>
          <div className="modal-statistic">
            <span>{calculateWinPercentage(wins, played)}</span>
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

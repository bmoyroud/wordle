import { INITIAL_STATS } from './statistics';

const KEY_GAME_STATE = 'game';
const KEY_STATISTICS = 'statistics';

function saveGame(game) {
  const json = JSON.stringify(game);
  localStorage.setItem(KEY_GAME_STATE, json);
}

function loadGame() {
  const json = localStorage.getItem(KEY_GAME_STATE);
  const game = JSON.parse(json);
  if (!game) return {};
  return game;
}

function saveStats(stats) {
  const json = JSON.stringify(stats);
  localStorage.setItem(KEY_STATISTICS, json);
}

function loadStats() {
  const json = localStorage.getItem(KEY_STATISTICS);
  const stats = JSON.parse(json);
  if (!stats) return INITIAL_STATS;
  return stats;
}

export { saveGame, loadGame, saveStats, loadStats };

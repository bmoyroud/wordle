const KEY_GAME_STATE = 'game';

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

export { saveGame, loadGame };

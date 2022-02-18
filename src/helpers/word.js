import { VALID_WORDS } from '../config';
import { getHighestStatus } from './status';

const isCompleteWord = (word) => word.length === 5;

const isValidWord = (word) => VALID_WORDS.includes(word);

const isSolution = (word, solution) => word === solution;

function getCorrect(word, solution) {
  if (word.length !== solution.length) throw new Error('Must be same length');

  const indices = [];
  const lettersToCheck = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === solution[i]) {
      indices.push(i);
    } else {
      lettersToCheck.push(solution[i]);
    }
  }
  return [indices, lettersToCheck];
}

function getStatus(correctPositions, currentPos, letter, lettersToCheck) {
  if (correctPositions.includes(currentPos)) {
    return 'correct';
  }

  const pos = lettersToCheck.indexOf(letter);
  if (pos > -1) {
    lettersToCheck.splice(pos, 1);
    return 'present';
  }

  return 'absent';
}

const checkWord = (word, solution) => {
  const [correctPositions, lettersToCheck] = getCorrect(word, solution);
  console.log(correctPositions, lettersToCheck);

  const evaluation = [];
  const statuses = {};
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    const status = getStatus(correctPositions, i, letter, lettersToCheck);
    evaluation.push(status);

    statuses[letter] = getHighestStatus(statuses[letter], status);
  }

  return [evaluation, statuses];
};

window.checkWord = checkWord;

export { checkWord, isCompleteWord, isValidWord, isSolution };

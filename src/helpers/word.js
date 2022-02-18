import { VALID_WORDS } from '../config';

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

const checkWord = (word, solution) => {
  if (isSolution(word, solution)) {
    return ['correct', 'correct', 'correct', 'correct', 'correct'];
  }

  const [correctPositions, lettersToCheck] = getCorrect(word, solution);
  console.log(correctPositions, lettersToCheck);

  const evaluation = [];
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    console.log(lettersToCheck);

    if (correctPositions.includes(i)) {
      evaluation.push('correct');
      continue;
    }

    const pos = lettersToCheck.indexOf(letter);
    if (pos > -1) {
      evaluation.push('present');
      lettersToCheck.splice(pos, 1);
    } else {
      evaluation.push('absent');
    }
  }

  return evaluation;
};

export { checkWord, isCompleteWord, isValidWord };

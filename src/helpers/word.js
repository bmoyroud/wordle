import { VALID_WORDS } from '../config';

const isCompleteWord = (word) => word.length === 5;

const isValidWord = (word) => VALID_WORDS.includes(word);

const isSolution = (word, solution) => word === solution;

function getCorrect(word, solution) {
  if (word.length !== solution.length) throw new Error('Must be same length');

  const indices = [];
  let updatedSolution = '';

  for (let i = 0; i < word.length; i++) {
    if (word[i] === solution[i]) {
      indices.push(i);
    } else {
      updatedSolution = `${updatedSolution}${solution[i]}`;
    }
  }
  return [indices, updatedSolution];
}

const checkWord = (word, solution) => {
  if (isSolution(word, solution)) {
    return ['correct', 'correct', 'correct', 'correct', 'correct'];
  }

  const [correctPositions, updatedSolution] = getCorrect(word, solution);
  console.log(correctPositions, updatedSolution);

  const evaluation = [];
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (correctPositions.includes(i)) {
      evaluation.push('correct');
    } else if (updatedSolution.includes(letter)) {
      evaluation.push('present');
    } else {
      evaluation.push('absent');
    }
  }

  return evaluation;
};

export { checkWord, isCompleteWord, isValidWord };

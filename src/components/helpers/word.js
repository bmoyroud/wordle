import { VALID_WORDS } from '../config';

const isCompleteWord = (word) => word.length === 5;

const isValidWord = (word) => VALID_WORDS.includes(word);

export { isCompleteWord, isValidWord };

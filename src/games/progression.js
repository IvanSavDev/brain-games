import gameStructure from '../index.js';
import getRandomNumber from '../randomNumber.js';

const rules = 'What number is missing in the progression?';

const game = () => {
  const lengthProgression = 10;
  let correctAnswer = 0;

  const startNumber = getRandomNumber(1, 25);
  const stepProgression = getRandomNumber(0, 10);
  const lostNumber = getRandomNumber(0, 10);

  const arrayProgression = [];

  for (let i = startNumber, j = 0; j < lengthProgression; i += stepProgression, j += 1) {
    if (j === lostNumber) {
      arrayProgression.push('..');
    } else {
      arrayProgression.push(i);
    }
  }

  if (lostNumber === 0) {
    correctAnswer = arrayProgression[lostNumber + 1] - stepProgression;
  } else {
    correctAnswer = arrayProgression[lostNumber - 1] + stepProgression;
  }

  const question = arrayProgression.join(' ');

  return [question, correctAnswer];
};

export default function progressionGame() {
  gameStructure(rules, game);
}

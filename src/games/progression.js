import gameStructure from '../index.js';

const progressionGame = () => {
  const rules = 'What number is missing in the progression?';

  const game = () => {
    const lengthProgression = 10;
    let correctAnswer = 0;

    const startNumber = Math.floor(Math.random() * (25 - 1 + 1) + 1);
    const stepProgression = Math.floor(Math.random() * 10);
    const lostNumber = Math.floor(Math.random() * 10);

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

    return [arrayProgression.join(' '), correctAnswer];
  };

  gameStructure(rules, game);
};

export default progressionGame;

import gameStructure from '../index.js';
import getRandomNumber from '../randomNumber.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = () => {
  const question = getRandomNumber(0, 100);

  const getPrimeNumber = (number) => {
    if (number === 0 || number === 1) {
      return false;
    }

    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  };

  const correctAnswer = getPrimeNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default function searchPrime() {
  gameStructure(rules, game);
}

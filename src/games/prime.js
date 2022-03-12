import gameStructure from '../index.js';
import getRandomNumber from '../randomNumber.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = () => {
  const question = getRandomNumber(0, 100);

  const isPrime = (number) => {
    for (let i = 2, max = Math.sqrt(number); i <= max; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }

    return number > 1;
  };

  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default function searchPrime() {
  gameStructure(rules, game);
}

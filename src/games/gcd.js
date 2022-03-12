import gameStructure from '../index.js';
import getRandomNumber from '../randomNumber.js';

const rules = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const firstOperand = getRandomNumber(0, 100);
  const secondOperand = getRandomNumber(0, 100);
  const question = `${firstOperand} ${secondOperand}`;
  const minOperand = firstOperand > secondOperand ? secondOperand : firstOperand;
  let correctAnswer = 0;

  for (let i = minOperand; i > 0; i -= 1) {
    if ((firstOperand % i === 0) && (secondOperand % i === 0)) {
      correctAnswer = i;
      break;
    }
  }

  return [question, correctAnswer];
};

export default function searchGcd() {
  gameStructure(rules, game);
}

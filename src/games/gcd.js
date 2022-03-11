import gameStructure from '../index.js';

const searchGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const game = () => {
    const firstOperand = Math.floor(Math.random() * 100);
    const secondOperand = Math.floor(Math.random() * 100);
    const question = `${firstOperand} ${secondOperand}`;
    const minOperand = firstOperand > secondOperand ? secondOperand : firstOperand;
    let correctAnswer = 0;
    for (let i = minOperand; i > 0; i -= 1) {
      if (firstOperand % i === 0 && secondOperand % i === 0) {
        correctAnswer = i;
        break;
      }
    }

    return [question, correctAnswer];
  };

  gameStructure(rules, game);
};

export default searchGcd;

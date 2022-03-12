import gameStructure from '../index.js';
import getRandomNumber from '../randomNumber.js';

const brainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise anser "no".';

  const game = () => {
    const question = getRandomNumber(0, 100);
    const condition = question % 2 === 0;
    const correctAnswer = condition ? 'yes' : 'no';

    return [question, correctAnswer];
  };

  gameStructure(rules, game);
};

export default brainEven;

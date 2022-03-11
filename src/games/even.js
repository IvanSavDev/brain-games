import gameStructure from '../index.js';

const brainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise anser "no".';

  const game = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    const condition = randomNumber % 2 === 0;
    const correctAnswer = condition ? 'yes' : 'no';
    const question = randomNumber;

    return [question, correctAnswer];
  };

  gameStructure(rules, game);
};

export default brainEven;

import gameStructure from '../index.js';

const calcGame = () => {
  const rules = 'What is the result of the expression?';

  const game = () => {
    const ArrayOfOperators = ['+', '*', '-'];
    const firstOperand = Math.floor(Math.random() * 100);
    const secondOperand = Math.floor(Math.random() * 100);
    const choiceOperator = Math.floor(Math.random() * 3);
    let correctAnswer = 0;
    let question = `${firstOperand} ${ArrayOfOperators[choiceOperator]} ${secondOperand}`;

    if (ArrayOfOperators[choiceOperator] === '+') {
	  correctAnswer = firstOperand + secondOperand;
    }
    if (ArrayOfOperators[choiceOperator] === '*') {
      correctAnswer = firstOperand * secondOperand;
    }
    if (ArrayOfOperators[choiceOperator] === '-') {
      correctAnswer = firstOperand - secondOperand;
    }

    return [question, correctAnswer];
  };

  gameStructure(rules, game);
};

export default calcGame;

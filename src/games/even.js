import gameStructure from '../index.js';

const brainEven = () => {
	const rules = 'Answer "yes" if the number is even, otherwise anser "no".';

	const game = () => {
		const randomNumber = Math.floor(Math.random() * 100);
		const condition = randomNumber % 2 === 0;
		let correctAnswer = '';
		let question = randomNumber;

		condition ? correctAnswer = 'yes' : correctAnswer = 'no';
		return [question, correctAnswer];
	}

	gameStructure(rules, game);
};

export default brainEven;

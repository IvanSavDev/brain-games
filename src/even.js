import readlineSync from 'readline-sync';

const brainEven = () => {
	console.log('Welcome to the Brain Games!');

  	const name = readlineSync.question('May I have your name? ');

  	console.log(`Hello, ${name}!`);
	console.log('Answer "yes" if the number is even, otherwise anser "no".');

	for (let i = 0; i < 3; i += 1) {
		const randomNumber = Math.floor(Math.random() * 100);
		console.log(`Question: ${randomNumber}`);
		const answer = readlineSync.question('Your answer? ');
		if (randomNumber % 2 === 0) {
			if (answer === 'yes') {
				console.log('Correct!');
			} else {
				console.log(`'no' is wrong answer ;(. Correct answer was 'yes'\nLet's try again, ${name}!`);
				return;
			}
		} else {
			if (answer === 'no') {
				console.log('Correct!');
			} else {
				console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
				return;
			}
		}
	}
	console.log(`Congratulations, ${name}`);
};

export default brainEven;

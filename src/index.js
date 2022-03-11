import readlineSync from 'readline-sync';

const gameStructure = (rules, game) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(rules);

  const gameCount = 3;

  for (let i = 0; i < gameCount; i += 1) {
    const [question, correctAnswer] = game();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer? ');

    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}`);
};

export default gameStructure;

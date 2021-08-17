const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if(userInput === 'rock' || userInput === 'paper' || userInput == 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('invalid choice.');
  }
};


const getComputerChoice = () => {
  let randNum = Math.floor(Math.random() * 3);

  switch (randNum) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      return 'error';
  }

/*
ALTERNATIVE WAY 
  if (choice === 0){
    return 'rock';
  } else if (choice === 1){
    return 'paper';
  } else if (choice === 2){
    return 'scissors';
  } else {
    return 'error';
  }
  */
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'It\'s a tie!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return 'You win! :D'
    } else {
      return 'You lose :( '
    }
  } 
  
  if (userChoice === 'paper') {
    if(computerChoice === 'rock'){
      return 'You win! :D'
    } else {
      return 'You lose :('
    }
  }

  if (userChoice === 'scissors'){
    if(computerChoice === 'paper'){
      return 'You win! :D'
    } else {
      return 'You lose :('
    }
  }

  if (userChoice === 'bomb'){
    return 'You knew the cheat code! You win!!'
  }
};

const playGame = () => {
  userChoice = getUserChoice('paper');
  computerChoice = getComputerChoice();

  console.log(`You chose: ${userChoice}\nThe computer chose: ${computerChoice}\n`);
  console.log(determineWinner(userChoice, computerChoice));
  console.log('Thank you for playing!')
};

playGame();

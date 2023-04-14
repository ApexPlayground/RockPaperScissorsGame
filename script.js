/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'

//getting player choice








function getComputerChoice() {

  let choice = ['Rock', 'Paper', 'Scissors']
  let randomChoice = Math.floor(Math.random() * choice.length)
  return choice[randomChoice]


}

// ** getResult compares playerChoice & computerChoice and returns the playerScore accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
let playerScore = 0; // Declare player's score outside of the function

function getResult(playerChoice, computerChoice) {
  // Game logic to determine round result
  // ...
  let roundResult = 0; // Variable to store round result

  if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    roundResult = 1;
  } else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
    roundResult--;
  } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
    roundResult = 1;
  } else if (playerChoice === 'Rock' && computerChoice === 'Paper') {
    roundResult--;
  } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
    roundResult = 1;
  } else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
    roundResult--;
  } // No need for the following else block

  playerScore += roundResult; // Update player's score with roundResult

  return playerScore;

  // return the result of playerScore based on if you won, drew, or lost



  // All situations where human draws, set `playerScore` to 0


  // All situations where human wins, set `playerScore` to 1
  // make sure to use else ifs here


  // Otherwise human loses (aka set playerScore to -1)


  // return playerScore

}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the playerScore. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  getResult(playerChoice, computerChoice)


  let result = document.getElementById('result'); // Assuming you have a div with id "result" to display the result
  let resultText;

  if (score < 0) {
    resultText = "You Lose!";
  } else if (score == 0) {
    resultText = "It's a Draw!";
  } else {
    resultText = "You Win!";
  }
  result.style.fontSize = '24px';

  result.innerText = `${resultText}`;





  // Hint: on a playerScore of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  let computerChoice = getComputerChoice();
  let gameResult = getResult(playerChoice, computerChoice);

  let scoreElement = document.getElementById('player-score');
  let choiceElement = document.getElementById('computer-choice');

  choiceElement.innerText = `Computer Choice: ${computerChoice}`;
  scoreElement.innerText = `Player Score: ${gameResult}`;

  showResult(gameResult, playerChoice, computerChoice); // Call showResult() to display the result on the screen
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  let rpsButtons = document.querySelectorAll('.rpsButton'); // Query all elements with class "rpsButton"
  rpsButtons.forEach(button => {
    button.addEventListener('click', function () {
      let playerChoice = button.value; // Get the value from the "data-choice" attribute of the clicked button
      onClickRPS(playerChoice); // Call the onClickRPS function with playerChoice as an argument
    });
  });







}
// Add a click listener to the end game button that runs the endGame() function on click
let clearGame = document.getElementById('endGameButton')

// ** endGame function clears all the text on the DOM **
clearGame.onclick = () => endGame()
function endGame() {
  playerScore = 0;
  computerScore = 0;

  let score = document.getElementById('player-score');
  let choice = document.getElementById('computer-choice');
  let result = document.getElementById('result');

  choice.innerText = ''; // Clear the computer choice text
  score.innerText = '';
  result.innerText = ' '// Clear the player score text



}

playGame()
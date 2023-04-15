

//generate a random computer choice
function getComputerChoice() {
  // create an array for cumputer choices
  let choices = ['Rock', 'Paper', 'Scissors']
  // random variable that will get a random value from choice
  let random = Math.floor(Math.random() * choices.length)
  //return a random computer choice
  return choices[random]
}


function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost

  let score;

  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice) {
    score = 0

    // All situations where human wins, set `score` to 1
    // make sure to use else ifs here
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1

  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1

  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1

    // Otherwise human loses (aka set score to -1)
  } else {
    score = -1
  }

  // return score
  return score
}


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the playerScore. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  let result = document.getElementById('result')

  switch (score) {
    case 1:
      result.innerText = "You win"
      break;
    case 0:
      result.innerText = "It's a Draw"
      break;
    case -1:
      result.innerText = "You Lose"
      break;
  }
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  playerScore.innerText = `${Number(playerScore.innerText) + score}`
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`

}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  // get the computer choice 
  const computerChoice = getComputerChoice()

  //get the player choice
  const score = getResult(playerChoice.value, computerChoice)

  //call the result function 
  showResult(score, playerChoice.value, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // get all the rpsButton class
  let rpsButtons = document.querySelectorAll('.rpsButton');
  //use for each to loop through al of them 
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton)
  })

  // Add a click listener to the end game button that runs the endGame() function on click
  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()

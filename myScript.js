const playerTurn = document.getElementById('playerTurn');
const playerScore = document.getElementById('playerScore');
const computerTurn = document.getElementById('computerTurn');
const computerScore = document.getElementById('computerScore');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');

const allGameIcons = document.querySelectorAll('.icon');

const resultText = document.getElementById('resultText');

let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;


const choices = {
    rock: { name: 'Rock', win: ['scissors'] },
    paper: { name: 'Paper', win: ['rock'] },
    scissors: { name: 'Scissors', win: ['paper'] }
}



function resetSelected() {
    allGameIcons.forEach(icon => {
        icon.classList.remove('selected');
    })
    stopConfetti();
}


function computerRandomCoice() {
    const computerChoiceNumber = Math.random();
    if (computerChoiceNumber < 0.3) {
        computerChoice = 'rock';
    } else if (computerChoiceNumber <= 0.65) {
        computerChoice = 'paper';
    } else if (computerChoiceNumber <= 1) {
        computerChoice = 'scissors';
    }
}
function updateScore(playerChoice) {
    console.log(playerChoice, computerChoice);
    if (playerChoice === computerChoice) {
        resultText.textContent = 'Berabere';
    } else {
        const choice = choices[playerChoice];
        if (choice.win.indexOf(computerChoice) === 0) {
            resultText.textContent = 'Player win!';
            startConfetti();
            playerScoreNumber++;
            playerScore.textContent = playerScoreNumber;
        } else {
            resultText.textContent = 'Computer win!';
            computerScoreNumber++;
            computerScore.textContent = computerScoreNumber;
        }
    }
}

function checkResult(playerChoice) {
    resetSelected();
    computerRandomCoice();
    displayComputerChoice();
    updateScore(playerChoice);
}

function select(playerChoice) {

    checkResult(playerChoice);

    switch (playerChoice) {
        case 'rock':
            playerRock.classList.add('selected');
            playerTurn.textContent = ' --- Rock';
            break;
        case 'paper':
            playerPaper.classList.add('selected');
            playerTurn.textContent = ' --- Paper';
            break;
        case 'scissors':
            playerScissors.classList.add('selected');
            playerTurn.textContent = ' --- Scissors';
            break;
    }

}

function displayComputerChoice() {

    switch (computerChoice) {
        case 'rock':
            computerRock.classList.add('selected');
            computerTurn.textContent = ' --- Rock';
            break;
        case 'paper':
            computerPaper.classList.add('selected');
            computerTurn.textContent = ' --- Paper';
            break;
        case 'scissors':
            computerScissors.classList.add('selected');
            computerTurn.textContent = ' --- Scissors';
            break;
    }

}

function resetAll() {
    computerScoreNumber = 0;
    playerScoreNumber = 0;
    playerScore.textContent = playerScoreNumber;
    computerScore.textContent = computerScoreNumber;
    resultText.textContent = "";
    playerTurn.textContent = "";
    computerTurn.textContent = "";
    resetSelected();
}
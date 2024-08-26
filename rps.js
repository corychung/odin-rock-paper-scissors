console.log("Rock Paper Scissors!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    switch(Math.floor(Math.random() * (3) + 1)) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
        default: return "none!"
    }
}

function getHumanChoice() {
    return prompt("What is your move?").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    const WIN = `You win! Your ${humanChoice} beats their ${computerChoice}.`;
    const LOSE = `You lose! Their ${computerChoice} beats your ${humanChoice}.`;
    const TIE = `Tie! Your ${computerChoice} is the same as their ${humanChoice}.`;
    switch(humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log(TIE);
            }
            if (computerChoice === "paper") {
                console.log(WIN);
                humanScore++;
            }
            if (computerChoice === "scissors") {
                console.log(LOSE);
                computerScore++;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                console.log(LOSE);
                computerScore++;
            }
            if (computerChoice === "paper") {
                console.log(TIE);
            }
            if (computerChoice === "scissors") {
                console.log(WIN);
                humanScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                console.log(LOSE);
                computerScore++;
            }
            if (computerChoice === "paper") {
                console.log(WIN);
                humanScore++;
            }
            if (computerChoice === "scissors") {
                console.log(TIE);
            }
            break;
    }
}

function playGame() {
    for (let i  = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    if (computerScore > humanScore) {
        console.log("You lost the game, better luck next time!")
        console.log(`You: ${humanScore}`);
        console.log(`CPU: ${computerScore}`);
    } 
    else {
        console.log("You win the game!")
        console.log(`You: ${humanScore}`);
        console.log(`CPU: ${computerScore}`);
    }

}

playGame();
console.log("Rock Paper Scissors!");

// create scores var
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

// create element var
let scoreCounter = document.querySelector("#score");
let resultText = document.querySelector("#result");
let buttons = document.querySelector(".button-container");
let cpuScoreText = document.querySelector("#cpu-score");
let humScoreText = document.querySelector("#hum-score");

// create try again button
const tryAgainBtn = document.createElement("button");
tryAgainBtn.textContent = "Try Again?";
tryAgainBtn.style.cssText = "text-align:center;padding:24px;flex-grow:0;"

// get computer choice fxn
function getComputerChoice() {
    switch(Math.floor(Math.random() * (3) + 1)) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}

// on user click of choice
buttons.addEventListener("click", (event) => {
    event.stopImmediatePropagation(); 
    // get human choice
    switch (event.target.id) {
        case "rock-btn":
            console.log("rock was selected");
            humanChoice = "rock";
            break;
        case "paper-btn":
            console.log("paper was selected");
            humanChoice = "paper";
            break;
        case "scissors-btn":
            console.log("scissors was selected");      
            humanChoice = "scissors";  
            break;
    }

    // get computer choice
    let computerChoice = getComputerChoice();

    // choose winner and update score
    switch(humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    resultText.textContent = "TIE! Both chose rock.";
                    break;
                case "paper":
                    resultText.textContent = "LOSE! CPU chose paper.";
                    computerScore++;
                    break;
                case "scissors":
                    resultText.textContent = "WIN! CPU chose scissors.";
                    humanScore++;
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "paper":
                    resultText.textContent = "TIE! Both chose paper.";
                    break;
                case "scissors":
                    resultText.textContent = "LOSE! CPU chose scissors.";
                    computerScore++;
                    break;
                case "rock":
                    resultText.textContent = "WIN! CPU chose rock.";
                    humanScore++;
                    break;
             }
            break;
        case "scissors":
            switch (computerChoice) {
                case "scissors":
                    resultText.textContent = "TIE! Both chose scissors.";
                    break;
                case "rock":
                    resultText.textContent = "LOSE! CPU chose rock.";
                    computerScore++;
                    break;
                case "paper":
                    resultText.textContent = "WIN! CPU chose paper.";
                    humanScore++;
                    break;
            }
            break;
        default:
            break;
    }

    // update score on DOM
    cpuScoreText.textContent = `CPU: ${computerScore}`;
    humScoreText.textContent = `You: ${humanScore}`;

    // declare winner on score of 5 and show try again
    if (computerScore == 5 || humanScore == 5) {
        if (computerScore > humanScore) {
            resultText.textContent = "You lose the game!"
        }
        else if (computerScore < humanScore) {
            resultText.textContent = "You win the game!"
        }
        else {
            resultText.textContent = "Tie!"
        }
        buttons.remove();
        document.body.appendChild(tryAgainBtn);
    }

})

// reset game on try again click
tryAgainBtn.addEventListener("click", () => {
    console.log("try again clicked");
    humanScore = 0;
    computerScore = 0;
    document.body.insertBefore(buttons,cpuScoreText);
    tryAgainBtn.remove();
    resultText.textContent = "";
    cpuScoreText.textContent = `CPU: ${computerScore}`;
    humScoreText.textContent = `You: ${humanScore}`;
})

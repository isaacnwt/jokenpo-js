var playerChoice = 0;
var playerPoints = 0;
var computerChoice = 0;
var computerPoints = 0;
var winner = -1;

// Executes all the functions and logics
function play(choice) {

    playerChoice = choice;
    computerChoice = Math.floor((Math.random() * (3 - 1 + 1))) + 1;

    checkWinner(playerChoice, computerChoice);
    showSelectedChoice();
    showMessage();

    document.getElementById("player-points").innerHTML = playerPoints;
    document.getElementById("computer-points").innerHTML = computerPoints;
}

// Compare the choices, sets the winner and add the points
function checkWinner(playerChoice, computerChoice) {

    // 1 - Stone 
    // 2 - Paper
    // 3 - Scissors
    if (playerChoice == computerChoice) {
        winner = 0;
    }
    else if (((playerChoice == 1) && (computerChoice == 3)) || ((playerChoice == 2) && (computerChoice == 1)) || ((playerChoice == 3) && (computerChoice == 2))){
        winner = 1;
        playerPoints++;
    }
    else {
        winner = 2;
        computerPoints++;
    }
}


// Changes the chosen class status to show it selected at screen
function showSelectedChoice() {
    document.getElementById("player-choice-1").classList.remove("selected");
    document.getElementById("player-choice-2").classList.remove("selected");
    document.getElementById("player-choice-3").classList.remove("selected");
    document.getElementById("computer-choice-1").classList.remove("selected");
    document.getElementById("computer-choice-2").classList.remove("selected");
    document.getElementById("computer-choice-3").classList.remove("selected");

    document.getElementById("player-choice-" + playerChoice).classList.add("selected");
    document.getElementById("computer-choice-" + computerChoice).classList.add("selected");
}


// Shows the round result
function showMessage() {
    if (winner == 0) {
        document.getElementById("messages").innerHTML = "Draw";
    }
    else if (winner == 1) {
        document.getElementById("messages").innerHTML = "Player wins";
    }
    else if (winner == 2) {
        document.getElementById("messages").innerHTML = "Computer wins";
    }
}
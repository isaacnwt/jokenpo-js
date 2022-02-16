var playerChoice = 0;
var playerPoints = 0;
var computerChoice = 0;
var computerPoints = 0;
var winner = -1;


function play(choice) {
    playerChoice = choice;
    computerChoice = Math.floor((Math.random() * (3 - 1 + 1))) + 1;

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

    document.getElementById("player-choice-1").classList.remove("selected");
    document.getElementById("player-choice-2").classList.remove("selected");
    document.getElementById("player-choice-3").classList.remove("selected");
    document.getElementById("computer-choice-1").classList.remove("selected");
    document.getElementById("computer-choice-2").classList.remove("selected");
    document.getElementById("computer-choice-3").classList.remove("selected");

    document.getElementById("player-choice-" + playerChoice).classList.add("selected");
    document.getElementById("computer-choice-" + computerChoice).classList.add("selected");

    if (winner == 0) {
        document.getElementById("messages").innerHTML = "Draw";
    }
    else if (winner == 1) {
        document.getElementById("messages").innerHTML = "Player wins";
    }
    else if (winner == 2) {
        document.getElementById("messages").innerHTML = "Computer wins";
    }

    document.getElementById("player-points").innerHTML = playerPoints;
    document.getElementById("computer-points").innerHTML = computerPoints;
}
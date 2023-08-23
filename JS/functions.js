//This function is to check the game is won.

function checkIfGameWon(first, second, third) {
    if (display.textContent.includes("won the game!")) {
        return;
    }
    if (
        buttons[first].textContent === "X" &&
        buttons[second].textContent === "X" &&
        buttons[third].textContent === "X"
    ) {
        disableButtonWhenGameIsWon("Player 1  ");
        return;
    } else if (
        buttons[first].textContent === "O" &&
        buttons[second].textContent === "O" &&
        buttons[third].textContent === "O"
    ) {
        disableButtonWhenGameIsWon("Player 2 ");
        return;
    } else {
        checkDraw()
    }

}

function checkStatus() {
//check if game has been won horizontally
   checkIfGameWon(0, 1, 2);
   checkIfGameWon(3, 4, 5);
   checkIfGameWon(6, 7, 8);

   //check if the game has been won vertically
   checkIfGameWon(0, 3, 6);
   checkIfGameWon(1, 4, 7);
   checkIfGameWon(2, 5 ,8);

   //check if game has been won diagonally
   checkIfGameWon(0, 4, 8);
   checkIfGameWon(2, 4, 6);
}


function disableButtonWhenGameIsWon(player) {
    for (let button of buttons) {
        if (button.textContent === "") {
            button.toggleAttribute("disabled");

        }
    }
    display.textContent = player + "won the game!";
}


function checkDraw() {
    for (let button of buttons){
        if (button.textContent === ""){
            return;
        }
    }
    display.textContent = "Draw!";
}
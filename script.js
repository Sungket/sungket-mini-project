//build the gameboard
let gameboard = [];

function buildGameboard() {
    let rows = 3;
    let cols = 3;
    for (let i = 0; i < rows; i++) {
        gameboard[i] = [];
        for (let j = 0; j < cols; j++) {
            gameboard[i][j] = ["."];
        }
    }
}

let win = false;

buildGameboard();

//game loop
function run() {
    console.log("lets go");
    const divs = document.querySelectorAll(".box");

    let currentPlayer = "O";
    let playerOTurnList = [];
    let playerXTurnList = [];

    divs.forEach((div) => {
        div.addEventListener("click", () => {
            if (div.innerHTML == "") {
                console.log(div.id);
                div.innerHTML = currentPlayer;
                if (currentPlayer == "O") {
                    playerOTurnList.push(parseInt(div.id));
                } else {
                    playerXTurnList.push(parseInt(div.id));
                }

                checkWin(playerOTurnList);
                checkWin(playerXTurnList);

                //switch player
                if (currentPlayer == "O") {
                    currentPlayer = "X";
                } else {
                    currentPlayer = "O";
                }
            }
        });
    });
}

run();

function checkWin(turnList) {
    //compare the turnlist with each winning combo
    const winningCombos = [
        [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]
    ];

    if (turnList.length > 2) {
    // the turn list arrays are getting inserted
    turnList.sort;
    //console.log("Hit");

        winningCombos.forEach(combo => {
            let count = 0;
            console.log(combo);
            console.log(turnList);
            combo.forEach(element => {
                //console.log(element);
                console.log(count);
                if(turnList.includes(element)) {
                    console.log("true");
                    count++
                    console.log(count);
                }
            })
            if (count == 3) {
                console.log("We have a winner");
                win = true;
                return;
            }
        }
        )
    }
}

if (win == true) {

}


//build the gameboard
let gameboard = [];

function buildGameboard() {
    let rows = 3;
    let cols = 3;
    for (let i = 0; i < rows; i++) {
        gameboard[i] = [];
        for (let j = 0; j < cols; j++) {
            gameboard[i][j] = [""];
        }
    }
}

let win = false;
let playerOTurnList = [];
let playerXTurnList = [];

buildGameboard();

//game loop
function run() {
    const divs = document.querySelectorAll(".box");

    let currentPlayer = "O";
    // let playerOTurnList = [];
    // let playerXTurnList = [];

    divs.forEach((div) => {
        div.addEventListener("click", () => {
            if (div.innerHTML == "") {
                div.innerHTML = currentPlayer;
                if (currentPlayer == "O") {
                    playerOTurnList.push(parseInt(div.id));
                } else {
                    playerXTurnList.push(parseInt(div.id));
                }

                checkWin(playerOTurnList, "O");
                checkWin(playerXTurnList, "X");

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

const start = document.querySelector("#start");
start.addEventListener("click", run);

const reset = document.querySelector('#reset');
reset.addEventListener("click", resetBoard);

function checkWin(turnList, player) {
    //compare the turnlist with each winning combo
    const winningCombos = [
        [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]
    ];

    if (turnList.length > 2) {
        turnList.sort;

        winningCombos.forEach(combo => {
            let count = 0;
            combo.forEach(element => {
                if(turnList.includes(element)) {
                    count++
                }
            })
            if (count == 3) {
                win = true;
                winMessage(win, player);
                return;
            }
            //check draw condition
        }
        )
    }
}

function winMessage(win, player) {
    if (win) {        
        const message = document.getElementById("winMessage");
        message.innerHTML = `Player ${player} wins!`;
    }
}


function resetBoard() {
    console.log("reset button pressed");
    playerOTurnList = []
    playerXTurnList = []
    const divs = document.querySelectorAll(".box");
    divs.forEach((div) => {
        div.innerHTML = "";
    })
}

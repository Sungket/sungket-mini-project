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

let winningCondition = false;

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
                    playerOTurnList.push(div.id);
                } else {
                    playerXTurnList.push(div.id);
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


            // console.log(div.id);
            // div.innerHTML = currentPlayer;
            // if (currentPlayer == "O") {
            //     playerOTurnList.push(div.id);
            // } else {
            //     playerXTurnList.push(div.id);
            // }

            // checkWin(playerOTurnList);
            // checkWin(playerXTurnList);

            // //switch player
            // if (currentPlayer == "O") {
            //     currentPlayer = "X";
            // } else {
            //     currentPlayer = "O";
            // }
        });
    });
}


run();

function checkWin(array) {
    //8 distinct winning conditions, which can be hardcoded in
    //123, 456, 678, 147, 258, 369, 159, 357
    //needs to be done after 3 turns have elapsed for the first player
    console.log(array);

}


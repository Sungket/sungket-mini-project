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
        });
    });
}

run();

function checkWin(array) {
    //8 distinct winning conditions, which can be hardcoded in
    //123, 456, 678, 147, 258, 369, 159, 357
    //needs to be done after 3 turns have elapsed for the first player
    //use a for-loop to check each element in each array to be compared to, and then see if Array A contains the 
    //same elements as Array B (but not in necessarily in the same order)
    //compare the current array to each winning array??
    console.log(array);
    win1 = [1,2,3];
    win2 = [4,5,6];
    win3 = [6,7,8];
    win4 = [1,4,7];
    win5 = [2,5,8];
    win6 = [3,6,9];
    win7 = [1,5,9];
    win8 = [3,5,7];

    if (array.length > 2) {
        for (let i = 0; i < array.length; i++) {
        // the turn list arrays are getting inserted
        array.sort;
        console.log(`win1 array = ${array[i]}`);
            for (let j = 0; j < win1.length; j++) {
            if (array[j] !== win1[j]) {
            console.log(false); // Found a different number
            }
        }
        console.log("we have a winner"); // All numbers matched
        }
    }
}

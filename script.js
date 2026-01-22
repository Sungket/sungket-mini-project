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

    let winningCombos = [
        [1,2,3], [4,5,6], [6,7,8], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]
    ];

    if (array.length > 2) {
    // the turn list arrays are getting inserted
    array.sort;

        
    //loop through the wins arrays
        for (let h = 0; h < array.length; h++){
            // console.log(winningCombos[h]);
            for (let i = 0; i < winningCombos.length; i++) {
                let count = 0;
                for (let j = 0; j < 3; j++) {
                    if (array[j] == winningCombos[i][j]) {
                        count++;
                    }
                    if (count == 3) {
                        console.log(`We have a win! ${array} contains the winning combo of ${winningCombos[h]}`);
                        break;
                    }
                }
            }
        }
    }
}

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

    divs.forEach((div) => {
        div.addEventListener("click", () => {
            console.log(div.id);
            div.innerHTML = currentPlayer;

            if (currentPlayer == "O") {
                currentPlayer = "X";
            } else {
                currentPlayer = "O";
            }
        });
    });
}

run();

// function winningCondition() {
//     //8 distinct winning conditions, which can be hardcoded in
    
// }


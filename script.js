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

    let count = 10;

    
        if (currentPlayer === "O") {
            divs.forEach((div) => {
                div.addEventListener("click", () => {
                console.log(div.id);
                div.innerHTML = "O";
                console.log(gameboard);
                currentPlayer = "X";
                })
            })
        } else {
            divs.forEach((div) => {
                div.addEventListener("click", () => {
                console.log(div.id);
                div.innerHTML = "X";
                console.log(gameboard);
                currentPlayer = "O";
                })
            })
        }
        count++;
    
}

run();

// function winningCondition() {
//     //8 distinct winning conditions, which can be hardcoded in
    
// }

box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "red";
});

box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "white";
});


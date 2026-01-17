// let gameboard = [[A00, A01, A02],
//                  [A10, A11, A12], 
//                  [A20, A21, A22]];

// let A00 = document.getElementById("A1");
// let A01 = document.getElementById("A2");
// let A02 = document.getElementById("A3");

// let A10 = document.getElementById("B1");
// let A11 = document.getElementById("B2");
// let A12 = document.getElementById("B3");

// let A20 = document.getElementById("C1");
// let A21 = document.getElementById("C2");
// let A22 = document.getElementById("C3");

// let box = document.getElementById("1");
// let box = document.querySelector("div"); //this selects the first parent div

const divs = document.querySelectorAll(".box");

divs.forEach((div) => {
    div.addEventListener("click", () => {
        console.log(div.id);
    })
})

box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "red";
});

box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "white";
});


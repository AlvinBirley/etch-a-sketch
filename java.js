const container = document.querySelector('#container');
let cell = document.createElement("div");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i ++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
        }
        )
    };
};

makeRows(16, 16);

function promptMe() {
    let promptUser = prompt("Choose Etch-A-Sketch Size");
}

let color = ["#3C9EE7", "#E7993C",
"#E73C99", "#3CE746", "#E7993C"];

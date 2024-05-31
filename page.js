// Kurtsley 2024

const INTIIAL_GRID_SIZE = 16;

const container = document.querySelector(".container");
const button = document.querySelector("button");

function createGrid(grid_size) {
    // Remove existing rows
    container.innerHTML = '';

    for (let i = 0; i < grid_size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.id = "row" + i;
        container.appendChild(row);
    
        for (let j = 0; j < grid_size; j++) {
            const div = document.createElement("div");
            div.classList.add("grid-div");
            div.id = `div-${i}-${j}`;
            row.appendChild(div);
        }
    }

    const divs = document.querySelectorAll(".grid-div");

    divs.forEach(div => {
        div.addEventListener("mouseenter", function() {
            div.style.backgroundColor = "black";
        });
    });
}

createGrid(INTIIAL_GRID_SIZE);

button.addEventListener("click", function() {
    let input = prompt("Squares per side (up to 100)");
    let number = parseInt(input);
    if (!isNaN(number) && number <= 100) {
        createGrid(number);
    }
    else {
        alert("Enter a valid number");
    }
});
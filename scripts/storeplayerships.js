`use strict`

let playerShips = [];
let shipCount = 0;

// Store user ships and changes site to board.html
function storeShips (event) {
    if (shipCount === 3) {
    event.preventDefault();
    let stringifiedData = JSON.stringify(playerShips);
    localStorage.setItem('playerShips', stringifiedData);

    let name = event.target.name.value;
    let stringifiedName = JSON.stringify(name);
    localStorage.setItem('playerName', stringifiedName);
    window.location.href ="./board.html"
    }
}

// Gets ships location and pushes it to playerShips
function getShipLocation(event) {
    if (shipCount < 3) {
    let tableLocation = event.target.id;
    let tdId = document.getElementById(tableLocation);
    tdId.innerText = 'O'

    playerShips.push(tableLocation);
    shipCount++;
    }
}

// Adds event listener to board
let playerBoard = document.getElementById('playerBoard')
playerBoard.addEventListener('click', getShipLocation)


let form = document.getElementById('name');
form.addEventListener('submit',storeShips);


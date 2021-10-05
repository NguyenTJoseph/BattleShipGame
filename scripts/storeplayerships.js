`use strict`

let playerShips = [];
let shipCount = 0;

// Store user ships and changes site to board.html
function storeShips () {
    if (shipCount === 3) {
    let stringifiedData = JSON.stringify(playerShips);
    localStorage.setItem('playerShips', stringifiedData);
    window.location.href ="./board.html"
    }
}

// Gets ships location and pushes it to playerShips
function getShipLocation(event) {
    if (shipCount < 3) {
    let tableLocation = event.target.id;
    let tdId = document.getElementById(tableLocation);
    tdId.innerText = '·'

    playerShips.push(tableLocation);
    shipCount++;
    }
}

// Adds event listener to board
let playerBoard = document.getElementById('playerBoard')
playerBoard.addEventListener('click', getShipLocation)


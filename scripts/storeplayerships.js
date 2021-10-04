`use strict`

let playerShips = [];
let shipCount = 0;

function storeShips () {
    if (shipCount === 3) {
    let stringifiedData = JSON.stringify(playerShips);
    localStorage.setItem('playerShips', stringifiedData);
    window.location.href ="./board.html"
    }
}

function getShipLocation(event) {
    if (shipCount < 3) {
    let tableLocation = event.target.id;
    let tdId = document.getElementById(tableLocation);
    tdId.innerText = '·'

    playerShips.push(tableLocation);
    shipCount++;
    }
}
'use strict';

let playerShips = [];
let shipCount = 0;

// Store user ships and changes site to board.html
function storeShips (event) {
  event.preventDefault();
  if (shipCount === 3) {
    let stringifiedData = JSON.stringify(playerShips);
    localStorage.setItem('playerShips', stringifiedData);
    let name = event.target.name.value;
    let stringifiedName = JSON.stringify(name);
    localStorage.setItem('playerName', stringifiedName);
    window.location.href = './board.html';
  } else {
    alert('Please place all your ships on the board.');
  }
}

// Gets ships location and pushes it to playerShips
function getShipLocation(event) {
  if (shipCount < 3) {
    let tableLocation = event.target.id;
    let tdId = document.getElementById(tableLocation);
    let img = document.createElement('img');
    img.setAttribute('src', 'Images/SiteAssets/Battleship-Icon.png');
    img.setAttribute('id', 'battleShipIcon');
    tdId.appendChild(img);
    playerShips.push(tableLocation);
    shipCount++;
  }
}

// Adds event listener to board
let playerBoardEntry = document.getElementsByClassName('playerBoardEntry')[0];
playerBoardEntry.addEventListener('click', getShipLocation);

// Gets Player's name from local storage
let form = document.getElementById('name');
form.addEventListener('submit',storeShips);

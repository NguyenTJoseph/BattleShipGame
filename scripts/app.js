`use strict`

let playerHits = 0;
let computerHits = 0;

let playerStrikes = [];
let computerStrikes = [];

let playerShips = getPlayerShips();
let computerShips = []; getComputerShips();


// Fill the ship positions for Computer Ships
function getComputerShips() {
    for (i = 0; i < 3; i++) {
        let temp = getRandomPosition();
        computerShips.push(temp);
    }
}

// Get Player Ships from localStorage
function getPlayerShips() {
    let jsonData = localStorage.getItem('playerShips');
    let parsedData = JSON.parse(jsonData);

    return parsedData;
}

// Random Position Generator
function getRandomPosition () {
	let position = [];
    const characters = "ABCDE";
    let letterSpot = "";
    const randomLetter = Math.floor(Math.random() * characters.length);
        letterSpot += characters[randomLetter];
        position.push(letterSpot);
    
    let numberSpot = Math.floor(Math.random() * 5) + 1;
        position.push(numberSpot);
    return(position.join(''));
}

// Computer Strike Function
function computerStrike() {
    let strikeSpot = getRandomPosition();
    let boxId = ('P' + document.getElementById(strikeSpot));
    for (i = 0; i < computerStrikes.length; i++){
        if (strikeSpot === computerStrikes[i]) {
            computerStrike();
        }
    }
    let x = 0
    for (x < 3; x++) {
        if (strikeSpot === playerShips[i]){
            boxId.innerText('Hit');
            computerHits++;
            x = 0
        } 
    } 
    if (x === 3) {
        boxId.innerText('Miss');
    }
    computerStrikes.push(strikeSpot);
}

function playerStrike(event){

    if (playerHits < 3 && computerHits < 3) {
        let boxId = event.target.id;
        for (i = 0; i < playerStrikes.length; i++){
            if (boxId === playerStrike[i]) {
                break;
            }
        }
        let x = 0;
        for (x < 3; x++) {
            if (boxId === computerShips[i]) {
                boxId.innerText = 'Hit';
                playerHits++;
                x = 0;
            } 
        }
        if (x === 3) {
            boxId.innerText('Miss');
        }
        playerStrikes.push(boxId);
        computerStrike();
    }
}

let compBoard = 
    
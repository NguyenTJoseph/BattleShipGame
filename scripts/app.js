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
    let boxId = document.getElementById(strikeSpot);
    for (i = 0; i < computerStrikes.length; i++){
        if (strikeSpot === computerStrikes[i]) {
            computerStrike();
        }
    }
    
    for (i = 0; i < 3; i++) {
        if (strikeSpot === playerShips[i]){
            boxId.innerText('Hit');
            computerHits++;
        } else if (i === 3) {
            boxId.innerText('Miss');
        }
    } 
    computerStrikes.push(strikeSpot);
}


    
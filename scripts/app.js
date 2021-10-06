`use strict`

let playerHits = 0;
let computerHits = 0;

let playerStrikes = [];
let computerStrikes = [];

let playerShips = getPlayerShips();
let computerShips = []; getComputerShips();
let status = false

var hitSound;
var missSound;

hitSound = new Sound("/Images/SiteAssets/hit-sound.wav");
missSound = new Sound('/Images/SiteAssets/water-miss2.mp3')

// Fill the ship positions for Computer Ships
function getComputerShips() {
    computerStrikes = [];
    for (i = 0; i < 3; i++) {
        let temp2 = false
        let temp = getRandomPosition();
        for (x = 0;x < computerShips.length; x++) {
            if (temp === computerShips[x]){
                temp2 = true
                console.log('Reload Ships')
                
                getComputerShips();
        }} if (temp2 === false && computerShips.length < 3){
            computerShips.push(temp);
        } 
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
let table = document.getElementById('playerBoard')
if (playerHits !== 3){
    let list = document.getElementById('computerlist')
    let strikeSpot = getRandomPosition();
    let id = ('P' + strikeSpot);
    let boxId = document.getElementById(id);
    let temp = false;

    for (i = 0; i < computerStrikes.length; i++){
        if (strikeSpot === computerStrikes[i]) {
            temp = true;
        }
    }

    if (temp === false) {
    let x = 0
    for (i = 0;i < 3; i++) {
        x++
        if (strikeSpot === playerShips[i]){
            hitSound.play();
            let icon = document.getElementById(id).childNodes[0]
                console.log(icon)
                icon.src = '/Images/SiteAssets/Explosion.png'
                icon.setAttribute('id', 'explosion')
            computerHits++;
            x = 0;
            
            let animationEndCallback = (e) => {
                table.removeEventListener('animationend', animationEndCallback);
                table.classList.remove('applySwing');
}
            table.classList.add('applySwing')
            table.addEventListener('animationend', animationEndCallback);
            status = false

            // Move List
            let li = document.createElement('li');
            li.innerText = (strikeSpot + ' Hit');
            list.appendChild(li);
        } 
    } 
    if (x === 3) {
        missSound.play();
        boxId.innerText = 'MISS';
        status = false
        let li = document.createElement('li');
        li.innerText = (strikeSpot + ' Miss');
        list.appendChild(li);
    } 
    

    if (computerHits === 3) {
        let wincard = document.getElementById('winCard')
            let text = document.createElement('p')
            text.innerText = 'You Lose'
            let button = document.createElement('button')
            button.className = "button"
            button.innerText = 'Play Again'
            button.setAttribute('onclick', 'playAgain()')
            wincard.appendChild(text)
            wincard.appendChild(button)
    }
    
    computerStrikes.push(strikeSpot);
} else {
    console.log('repeat');
    computerStrike();
}
}
}


// Player Strike Funciton
function playerStrike(event){
    let list = document.getElementById('playerlist')
    let table = document.getElementById('compBoard')
    let temp = false
    if (playerHits < 3 && computerHits < 3 && status === false) {
    let boxId = event.target.id;
        let td = document.getElementById(boxId)
        for (i = 0; i < playerStrikes.length; i++){
            if (temp === false){
                if (boxId === playerStrikes[i]) {
                 temp = true;
                }
            }
            
        }
    if (temp === false){
        let x = 0;
        for (i = 0; i < 3; i++){
        if (x < 3) {
            x++;
            if (boxId === computerShips[i]) {
                hitSound.play();
                let img = document.createElement('img')
                img.setAttribute('src', '/Images/SiteAssets/Explosion.png')
                img.setAttribute('id', 'explosion')
                td.appendChild(img)
                playerHits++;
                x = 0;
                

                let animationEndCallback = (e) => {
                    table.removeEventListener('animationend', animationEndCallback);
                    table.classList.remove('applySwing');
}
                table.classList.add('applySwing')
                table.addEventListener('animationend', animationEndCallback);

                let li = document.createElement('li');
                li.innerText = (boxId + ' Hit');
                list.appendChild(li);
            } 
        }
    }
        if (x === 3) {
            missSound.play();
            td.innerText = 'MISS';
            let li = document.createElement('li');
            li.innerText = (boxId + ' Miss');
            list.appendChild(li);
        }

        if (playerHits === 3) {
            let wincard = document.getElementById('winCard') 
            let text = document.createElement('p')
            text.innerText = 'You Win'
            let button = document.createElement('button')
            button.className = "button"
            button.innerText = 'Play Again'
            button.setAttribute('onclick', 'playAgain()')
            wincard.appendChild(text)
            wincard.appendChild(button)
        }
        
        playerStrikes.push(boxId);
        status = true
        setTimeout(computerStrike, 3500)
    }
    }

}

// Load players ships into the board
function loadShips() {
    for (i = 0; i < playerShips.length; i++){
        let position = ('P' + playerShips[i]);
        let boxId = document.getElementById(position);
        let img = document.createElement('img')
        img.setAttribute('src', '/Images/SiteAssets/Battleship-Icon.png')
        img.setAttribute('id', 'battleShipIcon')
        boxId.appendChild(img)
    }
}

function playAgain() {
    window.location.href ="./index.html"
}

// audio for explosion below

function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.sound.volume = 0.05;
    this.play = function(){
    this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }

console.log(computerShips)
loadShips();
let compBoard = document.getElementById('compBoard');
compBoard.addEventListener('click', playerStrike);
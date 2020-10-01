// import functions and grab DOM elements
import { gamePlay, didUserWin } from './utils.js';

const button = document.getElementById('call-it');
const winSpan = document.getElementById('wins');
const drawSpan = document.getElementById('draw');
const lossSpan = document.getElementById('loss');
const resultSpan = document.getElementById('result');
// initialize state

let wins = 0;
let losses = 0;
let draws = 0;


// set event listeners to update state and DOM

button.addEventListener('click', () => {

    const userChoice = document.querySelector('input[name="choices"]:checked');
    const userThrow = userChoice.value;

    const compThrow = gamePlay();
    const result = didUserWin(userThrow, compThrow);

// on click compares both choices and determine win lose or draw
//  iterate on state

    if (result === 'draw') {
        draws++;
        resultSpan.textContent = `It's a draw!`;
    } else if (result === 'win') {
        wins++;
        resultSpan.textContent = 'You won!';
    } else if (result === 'lose') {
        losses++;
        resultSpan.textContent = 'You lost.';
    }

    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    drawSpan.textContent = draws;

})
//I need to capture user input 
//call gamePlay function so computer will interact with user
//evaluate gamePlay
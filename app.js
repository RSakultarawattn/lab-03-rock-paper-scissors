// import functions and grab DOM elements
import { gamePlay } from './utils.js';

const button = document.getElementById('call-it');
const winSpan = document.getElementById('wins');
const perSpan = document.getElementById('percent');
const resultSpan = document.getElementById('result');
// initialize state

let wins = 0;
let draws = 0;


// set event listeners to update state and DOM

button.addEventListener('click', () => {

const userChoice = document.querySelector('input[name="choices"]:checked');
console.log(userChoice.value)
})
//I need to capture user input 
//call gamePlay function so computer will interact with user
//evaluate gamePlay
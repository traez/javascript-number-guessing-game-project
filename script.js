(function(){
/*
https://jsbeginners.com/javascript-number-guessing-game/
https://js-beginners.github.io/number-guess-game-project/
https://github.com/JS-Beginners/number-guess-game-project

Proud of myself for this one. The most complex code I've written for a project thus far.
Approached the solution like a programmer, and independently created and interconnected the various functions and addEventListeners.

Another fun JavaScript game. Enjoy!
*/

/*
variables to select elements from the DOM 
*/
const inputBar = document.querySelector('input');
const button = document.querySelector('button');
const guesses = document.querySelector('#guesses');
const guessRemain = document.querySelector('strong');
const high = document.querySelector('.high');
const low = document.querySelector('.low');
const iVal = document.querySelector('i');
const bVal = document.querySelector('b');
const won = document.querySelector('.won');
const lost = document.querySelector('.lost');
const startNew = document.querySelectorAll('.start');

/*
Global variables
*/
let randomNum = Math.floor(Math.random() * (100 - 1) + 1);
const array = [];
let remainNum = 7;

/*
Self explanatory functions and addEvent listeners
*/
  function arrayPush(){
    let numTyped = inputBar.value;
    if (array.length < 7) {
        array.push(numTyped);
      } else {
        disableButton();
        high.innerHTML = "";
        low.innerHTML = "";
        lost.classList.remove("hide");
      }
}

function populateGuesses(){
    guesses.textContent = array;
}

function populateRemain(){
    guessRemain.textContent = remainNum - array.length;
    iVal.textContent = array.length;
}

function disableButton(){
    button.setAttribute("disabled", "");
}

function checkGuess(){
    const last = array[array.length - 1];
    if(last < randomNum){
        low.classList.remove("hide");
        high.classList.add("hide");
    } else if (last > randomNum){
        high.classList.remove("hide");
        low.classList.add("hide");
    } else {
        disableButton();
        high.classList.add("hide");
        low.classList.add("hide");
        won.classList.remove("hide");
    }
}

window.addEventListener("load", () => {
    bVal.textContent = randomNum;
    console.log(randomNum);
  });

button.addEventListener("click", () => {
    if (inputBar.value) {
    arrayPush();
    populateGuesses();
    populateRemain();
    checkGuess();
    inputBar.value = "";
}
  });

startNew.forEach(start => {
    start.addEventListener("click", () => {
        location.reload();
      });
  })

})();

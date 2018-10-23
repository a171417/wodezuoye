var randomNumber=Math.floor((Math.random()*100))+1;
console.log(randomNumber);

var guessFidld=document.querySelector('.guessField')
// console.log(guessField);
// console.log(guessFidld.value);
// console.log(guessFidld.type);
var guessSubmit=document.querySelector('.guessSubmit')
// console.log(guessSubmit);
// console.log(guessSubmit.value);
// console.log(guessSubmit.type);
var guesses = document.querySelector('.guesses');
console.log('.guesses')
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessCoutn=1;
var resetButton;
guessFidld.focus();

function checkGuess(){
    // document.write('我是结论')
    guesses.innerHTML+=guessField.value+' ';
    guesses.style.backgroundColor='red';
}



var randomNumber=Math.floor((Math.random()*100))+1;
console.log(randomNumber);

var guessField=document.querySelector('.guessField');
// console.log(guessField);
// console.log(guessFidld.value);
// console.log(guessFidld.type);
var guessSubmit=document.querySelector('.guessSubmit');
// console.log(guessSubmit);
// console.log(guessSubmit.value);
// console.log(guessSubmit.type);
var guesses = document.querySelector('.guesses');
console.log('.guesses')
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessCount=1;
var resetButton;
guessField.focus();

function checkGuess(){
    // document.write('我是结论')
    var userGuess=Number(guessField.value);
    // console.log(userGuess);
    // console.log(typeof userGuess);
    if(guessCount === 1){
        guesses.textContent='上次猜得数字：';
    }
    guesses.textContent+=userGuess +' ';
    if(userGuess===randomNumber){
        lastResult.textContent='恭喜你猜对了';
        lastResult.style.backgroundColor='green';
        lowOrHi.textContent=' ';
       setGameOver();
    }
    else if(guessCount===10){
        lastResult.textContent='GameOver!';
        lowOrHi.textContent=' ';
        setGameOver();
    }
    else{
        lastResult.textContent='你猜错了';
        lastResult.style.backgroundColor='red';
        if(userGuess>randomNumber){
            lowOrHi.textContent='你猜高了';
        }
        else if(userGuess<randomNumber){
            lowOrHi.textContent='你猜低了';
        }
    }
    guessCount++;
    guessField.value='';
    guessField.focus();
}
guessSubmit.addEventListener('click',checkGuess);
// 设置游戏结束状态
function setGameOver(){
    guessField.disabled=true;
// 禁用文本框
    guessSubmit.disabled=true;
// 禁用确定按钮
    resetButton = document.createElement('button');
// 创建button元素 button为html按钮的标签名
  resetButton.textContent = '开始新游戏';
//   为新生成的元素resetButton设置文本界面
  document.body.appendChild(resetButton);
//   将resetButton作为body的小孩加入界面
  resetButton.addEventListener('click',resetGame);
//   为resetButton设置单击事件侦听器



// var resetButtonP=document.querySelector("div.resultPras p:last-child");
// console.log(resetButtonP);
// resetButtonP.style.dispay='block'
}
function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');
    for(var i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }



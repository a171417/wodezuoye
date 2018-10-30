var timer;

timer=window.setInterval(changNum,1000);

var images1=document.querySelector('#images');
var images2=document.getElementById('images');

console.log(images1);
console.log(images2);
console.log(images2.children[3]);


var currentNo=1;

function changNum(){
    if(currentNo<8) currentNo++;
    else currentNo=1;
    // h2Obj.innerHTML='<img src="inages/0'+currentNo+'.jpg" alt=""></img>';
}
var btnObj=document.getElementById('btnObj')
function startChange(){
    startTimer(500);
    btnObj.textContent="停止";
}
function stopChange(){
    window.clearInterval(timer);
    btnObj.textContent="启动"
}
btnObj.addEventListener('mouseover',stopChange);
btnObj.addEventListener('mouseout',startChange);
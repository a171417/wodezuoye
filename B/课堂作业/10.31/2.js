// var images4=document.querySelector('#images a:nth-child(4)');
// // CSS选择器来找
// var images4=document.getElementById('images').children[4];
// // 通过ID来找
// var images4=document.getElementsByClassName('hiddenImg')[3];
// //通过类名来找
// var images4=document.getElementsByTagName('a')[4];
// //通过标签名
// console.log(images4);
// images4.style.display="block";
var imagesA=document.getElementById('images').children;
// 获取一组带图像的超链接
var txtList=document.querySelectorAll(".txt-box>li");
console.log(txtList);



//   console.log(imagesA)
// //   隐藏第一张图
//   imagesA[0].style.display='none';
// //   显示第五张图
//   imagesA[4].style.display='block';
// 通过更换CSS类名来实现更换样式

//   imagesA[0].className="hiddenImg";

//     imagesA[4].className="displayImg";


//利用定时器间隔1s，显示一张图片，其余隐藏。
var currentNo=0;
// 显示当前图片编号
function changeImg(){
    // 排他原理，先去掉同类，同类图片透明度0（.hiddenImg）
    for(var i=0;i<imagesA.length;i++){
        imagesA[i].className="hiddenImg";
        txtList[i].className="txtItem normalColor";
        // console.log(imagesA[i]);
    }

    //再突出自己，当前图片透明度1（.displayImp）3
    imagesA[currentNo].className="displayImg";
    txtList[currentNo].className="txtItem heighlightColor";
    //换个元素，为下一次计时器调用做准备
    if(currentNo<7){currentNo++;}
    else{
        currentNo=0;
    }
    console.log(currentNo);

}

var sliderDiv=document.querySelector('.slider')
sliderDiv.addEventListener('mouseover',stopChange);
sliderDiv.addEventListener('mouseout',startChange);
var timer=window.setInterval(changeImg,1000)
function stopChange(){
    window.clearInterval(timer);
}
function startChange(){
     timer=window.setInterval(changeImg,1000)
}
//为所有文本Li注册鼠标移入事件，移入之后，当前li高亮，跳转到相应图片
for(var i=0;i<txtList.length;i++){
    txtList[i].addEventListener("mouseover",gotoImg);
    txtList[i].no=i;

}
function gotoImg(){
    // console.log(this.no);
    currentNo=this.no;
    changeImg();
}

var leftButton=document.querySelector('.leftButton');
var leftButton=document.querySelector('.rightButton');

leftButton.addEventListener('chick',leftImg);
rightButton.addEventListener('chick',rightImg);

function leftImg(){
    if(currentNo>0){currentNo--;}
    else{
        currentNo=7;
    }
imagesA[currentNo].className="displayImg";
txtList[currentNo].className="txtItem heighlightColor";
}
function rightImg(){
    if(currentNo<7){currentNo++;}
    else{
        currentNo=0;
    }
    changeImg();
}


  




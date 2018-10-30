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
function changeImg(){
    for(var i=0;i<imagesA.length;i++){
        imagesA[i].className="hiddenImg";
        console.log(imagesA[i]);
    }
    imagesA[currentNo].className="displayImg";
    if(currentNo<7){currentNo++;}
    else{
        currentNo=0;
    }
    // console.log(currentNo);

}

var img=document.getElementById('images')
images.addEventListener('mouseover',stopChange);
images.addEventListener('mouseout',startChange);
var timer=window.setInterval(changeImg,1000)
function stopChange(){
    window.clearInterval(timer);
}
function startChange(){
     timer=window.setInterval(changeImg,1000)
}

  




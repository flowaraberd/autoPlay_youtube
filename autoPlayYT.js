let autoPlay = setInterval(()=>{
let time = document.querySelector('.video-stream.html5-main-video').duration;
let currentTime = document.querySelector('.video-stream.html5-main-video').currentTime;
let isAgain = document.querySelector('.ytp-play-button.ytp-button');
if(currentTime > time-3){
document.querySelector('.video-stream.html5-main-video').currentTime=0;
//document.querySelector('.ytp-play-button.ytp-button').click();
//clearInterval(autoPlay)
console.clear();
}
if(!isAgain.title.includes('(k)')){
document.querySelector('.ytp-play-button.ytp-button').click();
}
},1000);

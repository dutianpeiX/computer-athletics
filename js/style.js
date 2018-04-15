// 控制音频五秒后播放
window.onload=function(){
    var oAudio=document.getElementById('audio');
    var timer;
    timer=setTimeout(function(){
        oAudio.src="radius/bg-radius.mp3";
        oAudio.volume="0.2";
    },2000);
}
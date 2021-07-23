var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
function oncl(){
    if(audio.loop==true){
        audio.loop=false;
        audio.pause;
        console.log("stopped");
    }
    else if(audio.loop==false){
        audio.loop=true;
        audio.play();
        console.log("started");
    }
}
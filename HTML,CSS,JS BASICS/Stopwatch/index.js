const Timer=document.getElementById("timer");
const Start=document.getElementById("start");
const Stop=document.getElementById("stop");
const Reset=document.getElementById("reset");
Start.addEventListener('click',StartTimer);
Stop.addEventListener('click',StopTimer);
Reset.addEventListener('click',ResetTimer);
let starttime=0;
let elapsedtime=0;
let interval;

function StartTimer(){
    starttime=Date.now()-elapsedtime;
    interval=setInterval(()=>{
        elapsedtime=Date.now()-starttime;
        Timer.textContent=formatTime(elapsedtime);
    },10)

 Start.disabled=true;
 Stop.disabled=false;
 Reset.disabled=false;
}
function formatTime(elapsedtime) {
    const milliseconds = Math.floor((elapsedtime % 1000) / 10);
    const seconds = Math.floor((elapsedtime % (1000 * 60)) / 1000);
    const minutes = Math.floor((elapsedtime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    return (
      (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
      ":" +
      (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
      ":" +
      (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
      "." +
      (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    );
  }
  function StopTimer() {
    clearInterval(interval);
   Start.disabled = false;
    Stop.disabled = true;
    Reset.disabled=false;
  }
  function ResetTimer() {
    clearInterval(interval);
  
    elapsedtime = 0;
    Timer.textContent = "00:00:00";
  
    Start.disabled = false;
    Stop.disabled = false;
    Reset.disabled=true;
  }
  
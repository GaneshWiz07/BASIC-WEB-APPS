const Start=document.getElementById("start");
const Stop=document.getElementById("stop");
const Reset=document.getElementById("reset");
const Timer=document.getElementById("timer");
Start.addEventListener('click',StartTimer);
Stop.addEventListener('click',stopTimer);
Reset.addEventListener('click',resetTimer);
let timeLeft=1500;
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    Timer.innerHTML = formattedTime;
  }
function StartTimer()
{
    interval=setInterval(()=>{
        timeLeft--;
        updateTimer();
        if(timeLeft===0){
        clearInterval(interval);
        alert("Time's Up!");
        timeLeft=1500;
        updateTimer();
        }
    },1000)
}

  function stopTimer()
  {
    clearInterval(interval);
  }
  function resetTimer()
  {
    clearInterval(interval);
    timeLeft=1500;
    updateTimer();
  }

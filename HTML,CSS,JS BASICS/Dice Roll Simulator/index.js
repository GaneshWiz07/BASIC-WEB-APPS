const Dice=document.getElementById("dice");
const Rollbtn=document.getElementById("roll-button");
const RollHis=document.getElementById("roll-history");
let rollList=[];
function rollDice()
{
    const rollResult=Math.floor(Math.random()*6)+1;
    const diceFace=getDiceface(rollResult);
    Dice.innerHTML=diceFace;
    rollList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory()
{
    RollHis.innerHTML="";
    for( let i=0;i<rollList.length;i++)
    {
        const listItem=document.createElement("li");
        listItem.innerHTML=`Roll ${i+1}:<span>${getDiceface(rollList[i])}</span>`;
        RollHis.appendChild(listItem);
    } 
 }
    function getDiceface(rollResult){
        switch(rollResult)
        {
         case 1:
          return "&#9856";
        case 2:
          return "&#9857";
        case 3:
          return "&#9858";
        case 4:
          return "&#9859";
        case 5:
          return "&#9860";
        case 6:
          return "&#9861";
        default:
          return "";
        }
    }

Rollbtn.addEventListener('click',()=>{
    Dice.classList.add("roll-animation");
    setTimeout(() => {
        Dice.classList.remove("roll-animation");
        rollDice();
        },1000);
});
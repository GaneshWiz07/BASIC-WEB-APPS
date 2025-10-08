const buttons=document.querySelectorAll("button");
const Result=document.getElementById('result');
const User_score=document.getElementById("user-score");
const Com_score=document.getElementById("com-score");
let userscore=0;
let compscore=0;
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        const result=playRound(button.id,compPlay());
        Result.innerHTML= result;
})})
function compPlay(){
    const choices=["rock","paper","scissor"];
    const randomchoice=Math.floor(Math.random()*choices.length);
    return choices[randomchoice];
}

function playRound(userSelection,compSelection){
    if(userSelection===compSelection){
        return "It's a tie!";
    }
    else if (
        (userSelection === "rock" && compSelection === "scissors") ||
        (userSelection === "paper" && compSelection === "rock") ||
        (userSelection === "scissors" && compSelection === "paper")
      ) 
      {
        userscore++;
        User_score.innerHTML = userscore;
        return "You win! " + userSelection + " beats "+compSelection;
      }
      else {
       compscore++;
      Com_score.innerHTML =compscore;
        return "You lose! " + compSelection + " beats " + userSelection;
      }
    }
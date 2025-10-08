const BirthDate=document.getElementById("birth");
const Btn=document.getElementById("calc");
const Year=document.getElementById("age");
Btn.addEventListener("click",calculateAge);
function calculateAge(){
    const birthValue=BirthDate.value;
    if(birthValue ==="")
    {
        alert("Please enter your birthday!");
    }
    else{
        const age= Age(birthValue);
        Year.innerHTML=`Your age is ${age} ${ age >1 ? "years":"year"} old`;
    }
}
function Age(birthValue){
    const currentDate = new Date();
    const birthDate = new Date(birthValue);
    let age=currentDate.getFullYear() - birthDate.getFullYear();
    const mon=currentDate.getMonth() - birthDate.getMonth();
    if( mon < 0 || (mon===0 && currentDate.getDate() < birthDate.getDate()))
    {
        age--;
    }
    return age;
}

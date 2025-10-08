const Input=document.getElementById("number");
const Error=document.getElementById("error");
const Kg=document.getElementById("kg");
Input.addEventListener('input',updateResults);
let errorTime;
let resultTime;
function updateResults()
{
    if(Input.value<=0||isNaN(Input.value))
        {
        Error.innerHTML="Please enter a valid number!";
        clearTimeout(errorTime);
        errorTime=setTimeout(()=>{
          Error.innerText="";
          Input.value="";  
    },2000)
        }
    else
    {
        Kg.innerHTML=(+Input.value/2.2).toFixed(2);
        clearTimeout(resultTime);
        resultTime=setTimeout(()=>{
        Kg.innerHTML="";
        Input.value="";
    },10000)
    }
}
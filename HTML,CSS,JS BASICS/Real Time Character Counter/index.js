const Textarea=document.getElementById("textarea");
const Total=document.getElementById("total");
const Remain=document.getElementById("remaining");
Textarea.addEventListener("keyup",()=>{
    updateCounter();
});
updateCounter();
function updateCounter(){
    Total.innerHTML=Textarea.value.length;
    Remain.innerHTML=Textarea.getAttribute("maxlength")-Textarea.value.length;
}

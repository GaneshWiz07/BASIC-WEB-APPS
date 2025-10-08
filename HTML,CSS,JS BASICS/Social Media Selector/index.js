const Menu=document.querySelector(".menu")
const Menutext=document.querySelector(".menu p");
const Menubar=document.querySelector(".social-lists");
const Lists=document.querySelectorAll(".social-lists li");
Menu.addEventListener('click',()=>{
    Menubar.classList.toggle("hide");
    Menu.classList.toggle("rotate");
});
Lists.forEach((list)=>{
    list.addEventListener('click',()=>{
    Menutext.innerHTML=list.innerHTML;
    Menubar.classList.toggle("hide");
    Menu.classList.toggle("rotate");
 });
});
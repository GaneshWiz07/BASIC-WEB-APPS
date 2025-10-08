const Bars=document.querySelector(".fa-bars");
const Sidebar=document.querySelector(".sidebar");
const Close=document.querySelector(".fa-times");
Bars.addEventListener('click',()=>{
    Sidebar.classList.toggle("show-sidebar");
    });
Close.addEventListener('click',()=>{
    Sidebar.classList.remove("show-sidebar");
});
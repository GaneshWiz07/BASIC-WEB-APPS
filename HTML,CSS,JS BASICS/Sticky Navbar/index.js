const Navbar=document.querySelector(".navbar");
const BottomContainer=document.querySelector(".bottom-container");
console.log(Navbar.offsetHeight)
console.log(BottomContainer.offsetTop);
window.addEventListener('scroll',()=>{
    if(window.scrollY>BottomContainer.offsetTop-Navbar.offsetHeight-50){
        Navbar.classList.add("active");
    }
    else{
        Navbar.classList.remove("active");
    }
})
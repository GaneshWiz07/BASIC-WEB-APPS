const Tabs= document.querySelector(".tab-container");
const Button=document.querySelectorAll(".button");
const Content=document.querySelectorAll(".content");
Tabs.addEventListener('click',(e)=>{
    const id = e.target.dataset.id;
    if(id){
        Button.forEach((btn)=>{
        btn.classList.remove("live");
    })
    e.target.classList.add("live");
    Content.forEach((article) =>{
        article.classList.remove("live");
      })
       const elem=document.getElementById(id);
      elem.classList.add("live");
    }
})
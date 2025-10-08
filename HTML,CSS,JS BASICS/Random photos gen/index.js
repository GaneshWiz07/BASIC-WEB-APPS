const Imagcontain=document.querySelector(".image-container");
const Btn=document.getElementById("btn");
Btn.addEventListener("click",()=>{
    imagenum=10;
    addNewImages();
});
function addNewImages(){
    for(let i=0;i<imagenum;i++){
        const newImage=document.createElement("img");
        newImage.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        Imagcontain.appendChild(newImage);
}
}

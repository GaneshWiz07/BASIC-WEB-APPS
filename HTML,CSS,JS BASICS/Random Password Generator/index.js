const Btn=document.querySelector("#gen");
const Input=document.querySelector(".input");
const Copy=document.querySelector(".fa-copy");
const Alert=document.querySelector(".alert-container");
Btn.addEventListener('click',()=>{
    createPassword();
});
Copy.addEventListener('click',()=>{
    copyPassword();
    if(Input.value){
        Alert.classList.remove("active");
    }
    setTimeout(()=>{
        Alert.classList.add("active");
    },2000);
})
function createPassword() {
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
      const randomNum = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNum, randomNum + 1);
    }
    Input.value = password;
    Alert.innerText = password + " copied!";
  }
function copyPassword() {
    Input.select();
    Input.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(Input.value);
  }
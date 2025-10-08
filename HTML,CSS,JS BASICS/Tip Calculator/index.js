const Bill=document.getElementById("bill");
const Tip=document.getElementById("tip");
const Total=document.getElementById("tot");
const Calc=document.getElementById("btn-cal");
const Res=document.getElementById("btn-res");
Calc.addEventListener('click',TipCalc);
Res.addEventListener('click',ResetValue);
function TipCalc(){
    const BillValue= Bill.value;
    const TipValue= Tip.value;
    const TotalAmount=BillValue*(1+(TipValue/100));
    Total.innerHTML=TotalAmount.toFixed(2);
}
function ResetValue(){
    Total.innerHTML= "";
    Bill.value="";
    Tip.value="";
}
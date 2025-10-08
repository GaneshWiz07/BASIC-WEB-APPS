const Celsius=document.getElementById("celsius");
const Fahrenheit=document.getElementById("fahrenheit");
const Kelvin=document.getElementById("kelvin");
function computeTemp(event){
    const currentTemp=+event.target.value;
    switch(event.target.id)
    {
        case "celsius":
            Kelvin.value=(currentTemp+273.32).toFixed(2);
            Fahrenheit.value=(currentTemp*1.8+32).toFixed(2); 
            break;
        case "fahrenheit":
            Celsius.value = ((currentTemp - 32) / 1.8).toFixed(2);
            Kelvin.value = ((currentTemp - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            Celsius.value = (currentTemp - 273.32).toFixed(2);
            Fahrenheit.value = ((currentTemp - 273.32) * 1.8 + 32).toFixed(2);
            break;
        default:
            break;   
    }
}

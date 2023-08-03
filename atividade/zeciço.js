let hr, franca

hr = Number(prompt("que horas são?"))
franca = hr + 5

if(hr <= 19){
    alert(`são ${hr} na frança`)
}
else if (hr >= 20 )
{
    franca = 24 - hr

}

alert (`Horario Franca is ${franca}`)
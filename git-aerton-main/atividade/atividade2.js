let nt1, nt2, nt3, nt4, media

nt1 = Number(prompt("digite sua nota"))
nt2 = Number(prompt("digite sua nota"))
nt3 = Number(prompt("digite sua nota"))
nt4 = Number(prompt("digite sua nota"))

media =  (nt1+nt2+nt3+nt4)/4

if(media >= 7 && media >= 10){
   alert(`sua media é ${media}`)
}
else if(media <7){
    alert(`reprovado ${media}`)
}
else{
    alert("numero invalido")
    location.reload()
}
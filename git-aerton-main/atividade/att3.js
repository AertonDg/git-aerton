let altura, sexo, pesoid

altura = Number(prompt(" qual altura?"))
sexo = Number(prompt(" qual o seu sexo \n M masculino \n F feminino"))

sexo = sexo.toUpperCase()

if(isNaN(altura) || altura === 0 || altura >= 2.51){
    alert(` digite sua altura em metros ${altura}`)
}
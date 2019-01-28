var compraRefrigerante = false
var compraCerveja =  false
var  compraSucoNatual = false

var convidado = {
    nome:'Abmael',
    idade:17,
    bebeCerveja: true,
    bebeRefrigerante:false 
}

if(convidado.bebeRefrigerante){
    compraRefrigerante = true
} else if(convidado.bebeCerveja && convidado.idade >= 18){
    compraCerveja = true
}

console.log(compraCerveja)


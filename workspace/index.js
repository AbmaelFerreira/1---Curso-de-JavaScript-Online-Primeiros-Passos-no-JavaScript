var compraRefrigerante = false
var compraCerveja =  false
var  compraSucoNatual = false

var convidados = [
        {   nome:'Abmael',
            idade:20,
            bebeCerveja: false,
            bebeRefrigerante:true 
        },
        {
            nome:'Maria',
            idade:17,
            bebeCerveja: false,
            bebeRefrigerante:false 
        },
        {
            nome:'Joao',
            idade:19,
            bebeCerveja: true,
            bebeRefrigerante:true 
        }
    ]


var compraCerveja = false

console.log(convidados.length)


for(var i = 0; i < convidados.length; i++){
    console.log(convidados[i].nome, convidados[i].bebeCerveja)
    if(convidados[i].bebeCerveja){
        compraCerveja = true
        break
    }
}


console.log(compraCerveja)





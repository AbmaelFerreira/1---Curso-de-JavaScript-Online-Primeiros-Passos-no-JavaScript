function imc (altura, peso){
    return peso / (altura * altura)
}

var pessoas = [
        {   nome:'Abmael',
            altura:1.70,
            peso:40
        },
        {
            nome:'Maria',
            altura:1.80,
            peso:50
        },
        {
            nome:'Joao',
            altura:1.50,
            peso:100 
        }
    ]

   


    for(var pessoa of pessoas ){
        resultado = imc(pessoa.altura ,pessoa.peso)
        console.log(pessoa.nome, resultado)
    }







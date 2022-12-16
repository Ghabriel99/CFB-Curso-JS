function sum(...values){
    let tam=values.lenght
    let res=0

    for (let i=0;i<tam;i++){
        res+=values[i]
    }

    return res

}

console.log(sum(10,10))

//Parâmetros REST, é uma forma de passagem de parametros aonde não precisa especificar a quantidade de parametros que eu quero enviar para dentro da função


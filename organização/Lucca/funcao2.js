// armazenamendo uma funcao em uma variavel
const imprimirSoma = function(a,b) {
    console.log(a + b)
}

imprimirSoma(2,3)

//armazenamendo uma funcao arrow em uma variavel
const soma = (a,b) => {
    return a + b
}
console.log(soma(2,3))

//armazenando uma funcao arrow em uma variavel com strings
const cidade = (pais,estado) =>{
    return pais + estado
}
console.log(cidade('brazil ','sp'))


//retorno implícito
const subtracao = (a,b) => a - b
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('legal')
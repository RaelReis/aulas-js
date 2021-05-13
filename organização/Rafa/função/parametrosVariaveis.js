function soma() {   // Função que recebe nenhum ou varios parametros 
    let acumulador = 0
    for (i in arguments) {
        acumulador += arguments[i]
    }
    return acumulador
}

console.log(soma())
console.log(soma(1))
console.log(soma(2))
console.log(soma(2, 5))
console.log(soma(2, 5, 6, 7))
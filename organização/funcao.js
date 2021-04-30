// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(1, 5)
imprimirSoma(2)
imprimirSoma(1, 2, 3)
imprimirSoma()

// Funcao com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma())
console.log(soma())
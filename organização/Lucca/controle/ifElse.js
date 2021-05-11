Number.prototype.entre = function (inicio,fim) {  //criando um prototype para ver se o valor ta entre >=inicio e <=fim
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) {
    if (nota.entre(9, 10)) {
        console.log('Melhor nota possivel') }
    else if (nota.entre(7, 8.99)) {
        console.log('Aprovado!') }
    else if (nota.entre(4,6.99)) {
        console.log('Ta de rec') } 
    else if (nota.entre(0 , 3.99)) {
        console.log('Reprovado') }
    else {
        console.log('Coloque um numero valido por favor')
    }
}    

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(3)
imprimirResultado(-20)
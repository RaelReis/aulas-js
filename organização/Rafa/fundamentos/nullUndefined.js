///let valor 
///console.log(valor) //variavel nao foi definida
///console.log(valor2) //variavel nao foi declarada (criada)

valor = null //ausencia de valor
console.log(valor)
// console.log(valor.toString()) // erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)   

produto.preco = undefined // nao atribuir undefined
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
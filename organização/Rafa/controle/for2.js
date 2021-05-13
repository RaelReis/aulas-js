const notas = [7.2, 8.3, 8.8, 10, 2.5]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Rafa',
    sobrenome: 'Reis',
    idade: 22
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
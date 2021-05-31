const notas = [7.2, 8.3 ,8.8 ,10 ,2.5]

for (let i in notas) {
    console.log(notas[i])
}

const pessoa = {
    nome: 'ana',
    sobrenome: 'silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}  
 


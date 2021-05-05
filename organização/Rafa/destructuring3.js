function rand({nome = 'Rafa', sobrenome = 'Reis'}){
    const nomeCompleto = nome + sobrenome
    return nomeCompleto
}

obj = {
    nome: 'Lucca',
    sobrenome: 'Biasoli'
}

console.log(rand({}))
console.log(rand(obj))

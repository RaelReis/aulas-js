//par nome / valor
const saudacao = 'Opa' // contexto lexico 1

function exec() { 
    const saudacao = 'falaaa' // contexto lexico 2 
    return saudacao
}

//objetos sao grupos aninhados de pares nomes / valor
const cliente = { 
    nome: 'Pedro',
    idade : 32,
    peso : 90,
    endereco : {
        logradouro : 'Rua muito legal',
        numero : 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
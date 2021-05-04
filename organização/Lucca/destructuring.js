const pessoa = {    //criaçao do dicionario
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro : 'Rua abc',
        numero : 1000
    }
}

const {nome,idade } = pessoa    //pegar nome e idade DE pessoa 
console.log(nome, idade)     //printar o nome e a idade capturados em cima

const {nome: n, idade : i} = pessoa   //criando uma variavel com nome e idade DE pessoa

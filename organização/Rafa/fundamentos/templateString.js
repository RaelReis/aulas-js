const nome = 'Rafael'
const concatenacao = 'Ola ' + nome + '!'
const template = `Olá ${nome}` // Aceita quebra de linahs
  
console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()  // Função

console.log(`ei... ${up('alho')}!`)
console.log(`ou... ${up('teu nome é ou?')}!`)
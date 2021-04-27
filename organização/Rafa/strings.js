const escola = "escol33a"

console.log(escola.charAt(0)) // Retrona a string com o indice como parametro
console.log(escola.charCodeAt(0)) // Retorna o numero html da string do indice como parametro
console.log(escola.indexOf('c'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Nova '.concat(escola).concat('!')) // Concatenação
console.log('Nova ' + escola +'!')  // Concatenação com "+"
console.log(escola.replace('e', 'E'))
console.log(escola.replace(/\d/g, 'E')) // Replace com regex

console.log('Lucca,Rafa,Dale'.split(','))
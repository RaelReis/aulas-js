const escola =  "cod3r"

console.log(escola.charAt(0)) ///seria o mesmo que [0] no python, para buscar a indice 
console.log(escola.charCodeAt(3)) /// para achar em linguagem html no site unicode - table
console.log(escola.indexOf('3')) /// mostra em qual indice está a string 3 ,no caso na indice 3
console.log(escola.substring(1)) ///mostra a string do indice 1 para frente
console.log(escola.substring(0,3)) ///mostra a string do indice do 0 ao 2]
console.log('escola'.concat(escola).concat("!")) ///concatenar uma string com outra
console.log('escola'+ escola + '!') ///concatenar de uma maneira mais simples 
console.log(escola.replace('3','e' )) //pega a string 3 e transforma em E
console.log(escola.replace(/\w/g ,'e')) ///g para substituir global ,tudo por E
console.log('Ana,Maria,Pedro'.split(',')) ///o separador reconhecido vai ser a virgula
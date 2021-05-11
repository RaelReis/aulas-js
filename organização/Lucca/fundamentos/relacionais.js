console.log('1' == 1) //1 = 1
console.log('1' === 1) //1 estritamente = 1
console.log('3' != 3)  // 3 diferente de 3
console.log('3' !== 3) // 3 estritamente diferente de 3


console.log('3' < 2)  // 3 menor que 2
console.log('3' > 2)  // 3 maior que 2
console.log('3' <= 2) // 3 menor ou igual a 2
console.log('3' >= 2) // 3 maior ou igual a 2

const d1 = new Date(0)  //criando o local na memoria d1 = 0
const d2 = new Date(0)  //criando o local na memoria d2 = 0
console.log(d1 === d2)  //d1 estritamente igual a d2
console.log(d1 ==d2)    //d1 igual a d2
console.log(d1.getTime() == d2) //colocar o valor de d2 em d1

console.log(undefined == null)
console.log(undefined === null)
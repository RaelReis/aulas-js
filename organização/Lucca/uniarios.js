let num1 = 1
let num2 = 2

num1++
console.log(num1)
num1--
console.log(num1)

console.log(num1++ === num2)  //vai dar erro pq ele vai acrescentar um ao num1, mas na checagem ainda vai estar sem o ++

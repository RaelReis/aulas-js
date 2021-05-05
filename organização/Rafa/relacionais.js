// == siginifca igual , === significa estritamente igual


console.log('1' == 1) // True
console.log('1' === 1) // False
console.log('3' != 3) // False
console.log('3' !== 3) // True


console.log('3' < 2) // False
console.log('3' > 2)
console.log('3' <= 2)
console.log('3' >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log(d1 === d2)
console.log(d1 == d2)
console.log(d1.getTime() == d2.getTime())

console.log(undefined == null)
console.log(undefined === null)

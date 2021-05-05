function rand([min = 0 , max  = 1000] = []) {
    if(min > max) [min,max] = [max,min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40])) //numero aleatorio de 40 a 50
console.log(rand([992])) //numero aleatorio de 992 ate 1000
console.log(rand([, 10])) //numero aleatorio de 0 a 10
console.log(rand(([]))) //numero aleatorio de 0 a 1000
console.log(rand()) //erro pois nao tem array inserida
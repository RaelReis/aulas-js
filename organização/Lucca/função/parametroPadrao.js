function soma1(a = 1, b = 3 ,c = 1) {
    return a + b + c
}

console.log(soma1(3))
console.log(soma1(2,2,6))


function teste() { //arguments nao precisa de parametros,
    for (let i in arguments) {
        console.log(arguments[i])
    }
}
teste('nazare', 'cupece', 2 , 4, 6)

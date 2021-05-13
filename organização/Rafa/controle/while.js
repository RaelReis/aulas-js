function getAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let teste = 0

while (teste != -1){
    teste = getAleatorioEntre(-1, 10)
    console.log(teste)
}
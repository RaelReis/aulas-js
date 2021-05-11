//exemplo basico de if sem function
let num = 12

if(num > 5) {
    console.log('é verdadeiro')
}

function soboanoticia(nota) {
    if(nota >= 7) {
        console.log('aprovado')
    }
}

soboanoticia(8.1)
soboanoticia(6.1)

//exemplo com function e if

function seforverdadeiroeufalo(valor) {
    if(valor) {                               //se valor for verdadeiro,imprimir é verdade + valor
        console.log('é verdade' + valor)
    }
}

seforverdadeiroeufalo()
seforverdadeiroeufalo(null)
seforverdadeiroeufalo(undefined)
seforverdadeiroeufalo(NaN)
seforverdadeiroeufalo('')
seforverdadeiroeufalo(0)

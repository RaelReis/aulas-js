function condicionalNota(nota){
    if (nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

condicionalNota(8.1)
condicionalNota(5.6)

function condicionalTrue(valor){
    if (valor){
        console.log('É verdadeiro ... ' + valor)
    }
}

condicionalTrue()
condicionalTrue(undefined)
condicionalTrue(null)
condicionalTrue(NaN)
condicionalTrue('')
condicionalTrue(0)
condicionalTrue(' ')
condicionalTrue('?')
condicionalTrue(-1)
condicionalTrue([])
condicionalTrue({})
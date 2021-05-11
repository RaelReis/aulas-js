Number.prototype.entre = function(inicio, fim){ // 
    return this >= inicio && this <= fim
}

function verificaNota(nota){
    if (nota.entre(9, 10)){
        console.log('Parabéns, você passou com maestria')
    } else if (nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if (nota.entre(3, 6.99)){
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else {
        console.log('Nota invalida')
    }
}

verificaNota(10)
verificaNota(8)
verificaNota(6)
verificaNota(2.5)
verificaNota(11)
function compras(trabalho1,trabalho2) { 
    const comprarSorvete = trabalho1 || trabalho2 //trabalho1 ou trabalho2
    const comprarTv50 = trabalho1 && trabalho2  //trabalho1 e trabalho2
    const comprarTv32 = trabalho1 != trabalho2  //trabalho1 diferente de trabalho2 v ou f
    const manterSaudavel = !comprarSorvete  //operador unario quando so tem ou v ou so f (not em python)

    return { comprarSorvete, comprarTv50, comprarTv32 , manterSaudavel }
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false)

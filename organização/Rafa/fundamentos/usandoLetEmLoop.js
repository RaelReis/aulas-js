for (let i = 0; i < 10; i++){
    console.log(i)
}

const lista = []

for (let i = 0; i < 10; i++){
    lista.push(function(){
        console.log(i)
    })
}

for (let funcs of lista){
    console.log(funcs)
}
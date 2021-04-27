let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

/// uma exclmaçao ! inverte o bool e duas !! mantem 


console.log('os verdadeisros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'TEXTO')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!Nan)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(!!('')|| null || 0 || ' ')

const valores = [7.7, 8.9, 6.3 ,9.2]
console.log(valores[0], valores [3]) /// vai mostrar as indices 0 e 3
console.log(valores[4]) ///vai aparecer undefined pq acaba no 3

valores[4] = 10 // cria uma quarta indice com o valor 10
console.log(valores)
console.log(valores.length) ///mostra o tamanho de indices de valores

valores.push({id: 3},false , null, 'teste') /// push manda informaçoes novas para a array
console.log(valores)

console.log(valores.pop())   /// pop retira o ulimo indice
delete valores [0] //// delete ta retirando o indice 0
console.log(valores)
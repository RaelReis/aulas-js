const pessoas = [ { id: 3, nome: 'Farelo' },
{ id: 2, nome: 'Rafa' },
{ id: 1, nome: 'Joao' } ]

const novasPessoas = {};
for (const { id, nome } of pessoas){
    novasPessoas[id] = { id, nome };
}
console.log(novasPessoas);
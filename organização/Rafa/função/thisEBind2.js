const Pessoa = function(){
    this.idade = 0

    const self = this // Isso pode subistituir a função bind()
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)

}

new Pessoa
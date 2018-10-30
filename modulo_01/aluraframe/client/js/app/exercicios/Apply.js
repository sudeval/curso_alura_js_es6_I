function exibeNome() {

    console.log(this.nome);
}

let pessoa1 = {
    nome: 'Pessoa 1'
}

let pessoa2 = {
    nome: 'Pessoa 2'
}

exibeNome()
exibeNome.bind(pessoa2)()
Reflect.apply(exibeNome, pessoa1, [])
// console.log(exibeNome())
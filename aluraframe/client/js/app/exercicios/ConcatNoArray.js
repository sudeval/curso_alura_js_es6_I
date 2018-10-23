let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
let lista = [];

function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}


exibeNoConsole(listaDeNomes1);

// concatenando
exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2));

// concatena parâmetros infinitos, inclusive não array.
exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2, 'Tiago'));
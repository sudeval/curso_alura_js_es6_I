(function() {
    var numeros = [2, 3, 4, 5];
    var resultado = numeros.reduce((anterior, atual) => {
        console.log(`${anterior} + ${atual}`);
        return anterior + atual}, 0); // nao precisa informar o zero.
    console.log(resultado)
})()

// quando passa o valor padrão ele fica sendo o primeiro valor para a variavel (anterior),
// caso contrário o primeiro valor é o primeiro indice.
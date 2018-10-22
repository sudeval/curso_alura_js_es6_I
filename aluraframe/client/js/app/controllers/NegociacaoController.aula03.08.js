class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        // versao inicial
        // let inputData = document.querySelector('#data');
        // let inputQuantidade = document.querySelector('#quantidade');
        // let inputValor = document.querySelector('#valor');

        // versão em que facilita o querySelector, mas continua com problema na pesquisa do DOM.
        // necessário o bind(document) pois internatemente o querySelector utilizada o this
        // let $ = document.querySelector.bind(document);
        // let inputData = $('#data');
        // let inputQuantidade = $('#quantidade');
        // let inputValor = $('#valor');



        // console.log(this._inputData.value)
        // console.log(this._inputQuantidade.value)
        // console.log(this._inputValor.value)

        // Date recebe um array com ano, mes e dia.
        // let data = new Date(this._inputData.value.split("-"));

        // spread operator (passa um item de cada vez como parâmetro)
        // Date(ano,mes,dia) -> mas assim o mes é de 0-11
        // let data = new Date(...this._inputData.value.split("-"));

        // map cria um novo array
        let data = new Date(...
            this._inputData.value
            .split('-')
            .map(function(item, indice) {
                if (indice == 1) {
                    return item - 1;
                }
                return item;
                // sem o if -> return item - indice % 2
            })
        );
        console.log(data);


        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        )

        console.log(negociacao)


    }
}
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

        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        )

    }
}
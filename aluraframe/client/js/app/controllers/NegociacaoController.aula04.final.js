class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {
        event.preventDefault();
        
        // essa classe nao pode ser instanciada.
        // new DateHelper();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();

        // o array de negociacoes ta protegido
        this._listaNegociacoes.negociacoes.length = 0;
        console.log('deveria ser 1: ' + this._listaNegociacoes.negociacoes.length);
        // this._listaNegociacoes.negociacoes.push(this._criaNegociacao());
        // console.log('não deve ser 2: ' + this._listaNegociacoes.negociacoes.length);

        console.log(this._listaNegociacoes.negociacoes);
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }


    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        // foco
        this._inputData.focus();
    }
}
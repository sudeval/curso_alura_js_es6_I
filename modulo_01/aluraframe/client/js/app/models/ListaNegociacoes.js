class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao)
    }

    get negociacoes() {
        // evitar que a lista seja manipulada
        return [].concat(this._negociacoes);
    }
}
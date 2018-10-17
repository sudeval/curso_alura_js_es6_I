class Negociacao {

    constructor(data, quantidade, valor) {
        // _ (underline) é uma convenção para não acessar a propriedade
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        // tornando a instância imutavel
        Object.freeze(this);
    }

    get volume() {
        return this.quantidade * this.valor
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get data() {
        return this.data;
    }
}
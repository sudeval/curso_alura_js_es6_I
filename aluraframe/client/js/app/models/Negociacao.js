class Negociacao {

    constructor(data, quantidade, valor) {
        // _ (underline) é uma convenção para não acessar a propriedade
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        // tornando a instância imutavel
        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this._valor
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

}
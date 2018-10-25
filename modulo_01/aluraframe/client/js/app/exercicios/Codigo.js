class Codigo {
    constructor(texto) {
        if (!this._valida(texto)) throw new Error(`texto informado (${texto}) não é válido.`);
        this._texto = texto;
    }

    _valida(texto) {
        return /\D{3}-\D{2}-\d{2}/.test(texto);
    }

    get texto() {
        return this._texto;
    }
}


let codigo1 = new Codigo('GWZ-JJ-12');
console.log(codigo1);

let codigo2 = new Codigo('1X1-JJ-12');
console.log(codigo2);
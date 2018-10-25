class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    // removendo o _ private (convenção), já que ele vai ser um método sobrescrito.
    template() {
        throw new Error('O método template deve ser implementando.')
    }

    update(model) {
        return this._elemento.innerHTML = this.template(model);
    }
}
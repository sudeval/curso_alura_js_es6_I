class Relogio {

    constructor() {
        let self = this;
        this._segundos = 0;

//        setInterval(function () {
//            console.log(++self._segundos); // acessando a variável self, que é a instância de `Relogio` 
//          }, 1000);
        setInterval(() => console.log(++this._segundos), 1000);
    }
}

var relogio = new Relogio();
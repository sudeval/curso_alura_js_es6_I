class ConversorXML {

    static converte(objeto) {

    }
}

let conversor = new ConversorXML();
// nao vai funcionar por conta do método estático não fazer parte da instância.
conversor.converte({nome: 'Tiago', idade: 35});

// ConversorXML.converte({nome: 'Tiago', idade: 10});

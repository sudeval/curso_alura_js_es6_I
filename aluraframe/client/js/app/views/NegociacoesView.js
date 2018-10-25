class NegociacoesView extends View {

    // como é igual ao construtor da classe pai ele poderia ser removido.
    constructor(elemento) {
        // super -> passando para a classe pai
        super(elemento);
    }

    template(model) {
        return `        
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.negociacoes.map(n => `
                        <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `).join('')}
                </tbody>

                <tfoot>
                    <td colspan="3"></td>
                    <td>
                        ${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
                    </td>
                </tfoot>
            </table>
        `
    }

}


// versao 1 do foot (IIFE)
/* <td>${
    (function() {
        let total = 0;
        model.negociacoes.forEach(element => total += element.volume);
        return total;
    })()
}</td> */

// versao 2 do foot (reduce 'transforma' o array em um unico elemento.)
// ${model.negociacoes.reduce(function(total, n) {
//     return total + n.volume;
// }, 0.0) // 0.0 é o valor padrão inicial para o parâmetro passado (total)
// }
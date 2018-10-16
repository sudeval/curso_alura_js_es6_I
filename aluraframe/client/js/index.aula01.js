
let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

console.log(campos);

// tbody para adicionar o total
let tbody = document.querySelector('table tbody');

// evento no form
document.querySelector('.form').addEventListener('submit', function() {

    // nao submeter o formulario e evitar que a pagina seja recarregada
    event.preventDefault();

    let tr = document.createElement('tr');
    campos.forEach(function(campo) {
        let td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    })

    let tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    // adicionando a linha na tabela
    tbody.appendChild(tr);


    // limpando os campos
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    // foco na data
    campos[0].focus();
})

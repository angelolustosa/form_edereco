//Seleção multi-linha no VS Code: https://pt.stackoverflow.com/questions/233417/sele%C3%A7%C3%A3o-multi-linha-no-vs-code

//Array de estados: https://gist.github.com/kavalcante/16106796c430c1711a71c5ba1213cee5?permalink_comment_id=3812708#gistcomment-3812708

//https://gist.github.com/kavalcante/16106796c430c1711a71c5ba1213cee5

//API de localidades: https://servicodados.ibge.gov.br/api/docs/localidades
//Exemplos: https://servicodados.ibge.gov.br/api/docs/localidades#api-Paises

//https://servicodados.ibge.gov.br/api/v1/localidades/estados/CE/distritos
//https://servicodados.ibge.gov.br/api/v1/localidades/estados/


/* const states = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goías' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraíma' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' },
] */

const findAddressByCep = () => {
    let cep = document.getElementById('cep').value;

    console.log(cep);


    if (cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => response.json())
            .then(data => {
                console.log(data, data )
                document.getElementById('rua').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('estado').value = data.uf;
                document.getElementById('cidade').value = data.localidade;
            });
    } else {
        alert('Favor informe o CEP')
    }
}

/* const fillStates = () => {
    const select = document.querySelector('#estado');

    states.map(city => {
        //console.log(city.nome)
        var option = document.createElement('option');

        option.value = city.sigla;
        option.textContent = city.nome;

        select.appendChild(option)
    });
} */
const fillStates = () => {
    const select = document.querySelector('#estado');

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/`)
        .then((response) => response.json())
        .then(data => {
            console.log(data)

            data.map(estado => {
                console.log(estado)
                var option = document.createElement('option');

                option.value = estado.sigla;
                option.textContent = estado.nome;

                select.appendChild(option)
            });

        });
}

fillStates();

const fillCities = () => {
    const select = document.querySelector('#cidade');

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/CE/distritos`)
        .then((response) => response.json())
        .then(data => {
            console.log(data)

            data.map(cidade => {
                //console.log(cidade.nome)
                var option = document.createElement('option');

                option.value = cidade.nome;
                option.textContent = cidade.nome;

                select.appendChild(option)
            });

        });
}

fillCities()
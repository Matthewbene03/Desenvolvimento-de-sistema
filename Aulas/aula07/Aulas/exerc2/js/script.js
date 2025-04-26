let selectEstado = document.getElementById("selectEstado"); //Pegar o obejto select.

let selectRegiao = document.getElementById("selectRegiao"); //Pegar o obejto select.

async function preencherEstados() {
    deletarLinhasSelect();

    let idRegiao = selectRegiao.value;

    let respotaReq = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes/" +idRegiao+ "/estados"); //Recebe todos os uf da região 3 (Sudeste)

    let uf = await respotaReq.json(); //Recebe um vetor com todos os uf da região sudeste.

    let index = 0;
    uf.forEach(estados => {
        selectEstado.innerHTML +=
            `<option value="${estados.id}">${estados.nome}</option>`;
    });
}

async function consultarRegiao(){
    let respotaReq = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes"); //Recebe todas as regiões do brasil

    let regioes = await respotaReq.json(); //Recebe um vetor com todas as regioes do brasil.

    regioes.forEach(regiao => {
        selectRegiao.innerHTML +=
            `<option value="${regiao.id}">${regiao.nome}</option>`;
    });
}

async function consultarMunicipios() {
    let tbody = document.getElementById("idTbody"); //Pego o tbody da minha tabela.
    deletarLinhasTabela(tbody);

    let regiaoId = selectRegiao.value; //Pega o id da região
    let ufId = selectEstado.value; //Pega o id do UF selecionado

    let respotaReq = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + ufId + "/municipios"); //Recebe todos os uf da região 3 (Sudeste)

    let municipios = await respotaReq.json(); //Recebe um vetor com todos os municipios do uf informado.

    preencherTabelaDosMunicipios(municipios, tbody);
    console.log("Municipios cadastrados na tabela!");
}

function deletarLinhasTabela(tbody) {
    let corpoTabela = tbody;
    while (corpoTabela.rows.length > 0) {
        corpoTabela.deleteRow(0);
    }
}

function preencherTabelaDosMunicipios(municipios, tbody) {
    municipios.forEach(municipio => {
        tbody.innerHTML +=
            `<tr>
                <td>${municipio.id}</td>
                <td>${municipio.nome}</td>
            </tr>`;
    });
}

function deletarLinhasSelect() {
    let corpoSelect = selectEstado;
    while(corpoSelect.options.length > 1){
        corpoSelect.remove(1);
    }
}
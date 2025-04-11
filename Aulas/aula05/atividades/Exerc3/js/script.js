let nome = document.getElementById("nome");
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let table = document.getElementById("id_table");
let tbody = document.getElementById("id_tbody");

function addPessoa(){
    let nomePessoa = nome.value;
    let pesoPessoa = parseFloat(peso.value);
    let alturaPessoa = parseFloat(altura.value);
    let imc = (calculoIMC(pesoPessoa, alturaPessoa)).toFixed(2);

    tbody.innerHTML +=
    `<tr>
        <td>${nomePessoa}</td>
        <td>${pesoPessoa}</td>
        <td>${alturaPessoa}</td>
        <td>${imc}</td>
    </tr>`;
}

function calculoIMC (peso, altura){
    let imc = peso/Math.pow(altura,2);
    return imc;
}
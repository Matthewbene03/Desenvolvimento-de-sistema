class contaBancaria {
    constructor(numConta, nomeCliente) {
        this.numConta = numConta;
        this.nomeCliente = nomeCliente;
        this.saldo = 0;
    }

    get getNumConta() {
        return this.numConta;
    }
    get getNomeCliente() {
        return this.nomeCliente;
    }
    get getSaldo() {
        return this.saldo;
    }
}

let numeroConta = document.getElementById("id_numConta");
let nomeCli = document.getElementById("id_nomeCliente");
let numConta = document.getElementById("id_numeroConta");
let valor = document.getElementById("id_valor");
let operacao = document.getElementById("id_operacao");
let tbody = document.getElementById("id_tbody");

function inicializarLocalStorage() {
    if (!localStorage.idConta) {
        let contaBancaria = [];
        localStorage.setItem("idConta", JSON.stringify(contaBancaria));
    }
}

function cadastrarConta() {
    let numCon = numeroConta.value;
    let nome = nomeCli.value;
    if (((numCon !== "") && (numCon !== null) && (numCon !== undefined))
        && ((nome !== "") && (nome !== null) && (nome !== undefined))) {
        let vetConta = JSON.parse(localStorage.getItem("idConta"));

        let conta = new contaBancaria(numCon, nome);
        if (verificaNumeroConta(conta.numConta, vetConta)) {
            alert("Esse número da conta já existe!!!");
        } else {
            vetConta.push(conta);
            popularLocalStorage(vetConta);
            alert("Cadastro de conta bancaria realizado com sucesso!!!");
        }
    } else {
        alert("Você digitou informações erradas!!!")
    }
    numeroConta.value = "";
    nomeCli.value = "";
}

function exibirTabela() {
    let vetConta = JSON.parse(localStorage.getItem("idConta"));

    vetConta.forEach(conta => {
        //alert(conta.numConta + ", " + conta.nomeCliente + ", " + conta.saldo)
        tbody.innerHTML +=
            `<tr>
            <td>${conta.numConta}</td>
            <td>${conta.nomeCliente}</td>
            <td>${conta.saldo}</td>
        </tr>`;
    });
}

function deletarLinhaTabela(){
    let corpoTabela = tbody;
    while(corpoTabela.rows.length > 0){
        corpoTabela.deleteRow(0);
    }
}

function popularLocalStorage(vetConta) {
    localStorage.setItem("idConta", JSON.stringify(vetConta));
}

function verificaNumeroConta(numConta, vetContas) {
    return vetContas.some(contaBancaria => contaBancaria.numConta == numConta);
}

function transacao() {
    let numContaTra = numConta.value;
    let valorTra = valor.value;
    let operacaoTra = operacao.value;
    let existeConta = false;

    if (((numContaTra !== "") && (numContaTra !== null) && (numContaTra !== undefined))
        && ((valorTra !== "") && (valorTra !== null) && (valorTra !== undefined))
        && ((operacaoTra !== "") && (operacaoTra !== null) && (operacaoTra !== undefined))) {
        let vetConta = JSON.parse(localStorage.getItem("idConta"));

        vetConta.forEach(conta => {
            if (conta.numConta === numContaTra) {
                //Vamos verificar qual o tipo de operação para essa conta
                if (operacaoTra === "deposito") {
                    conta.saldo = (parseFloat(conta.saldo) + parseFloat(valorTra)).toFixed(2);
                } else {
                    conta.saldo = (parseFloat(conta.saldo) - parseFloat(valorTra)).toFixed(2);
                }
                existeConta = true;
            }
        });
        if (existeConta === false) {
            alert("Você informou um número de conta que não existe!!!")
        }
        popularLocalStorage(vetConta);
        deletarLinhaTabela();
        exibirTabela();
    } else {
        alert("Você digitou informações erradas!!!")
    }

    numConta.value = "";
    valor.value = "";
    operacao.value = "";
}
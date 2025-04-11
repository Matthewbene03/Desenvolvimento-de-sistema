function calculaRendimento() {
    let valorRendimento = parseFloat(document.getElementById("id_valor").value);
    let taxaRendimento = parseFloat(document.getElementById("id_taxa").value);
    let mesesRendimento = parseInt(document.getElementById("id_qtdMeses").value);
    let rendimento = 0;
    let valorTotal = 0;
    let lucro = 0;

    if (((valorRendimento !== "") && (valorRendimento !== null) && (valorRendimento !== undefined))
        && ((taxaRendimento !== "") && (taxaRendimento !== null) && (taxaRendimento !== undefined))
        && ((mesesRendimento !== "") && (mesesRendimento !== null) && (mesesRendimento !== undefined))) {

        for (let i = 1; i <= mesesRendimento; i++) {
            rendimento = valorRendimento * (taxaRendimento / 100);
            lucro += rendimento;
            valorTotal = valorRendimento + rendimento;
            addDinheiro(i, valorRendimento, rendimento, valorTotal);
            valorRendimento = valorTotal;
        }

        document.getElementById("lucro").textContent = "O seu lucro é de R$" + lucro.toFixed(2);

    } else {
        document.getElementById("lucro").innerHTML = "Valor inesperado!";
    }
}

function addDinheiro(mes, valor, rendimentoPar, valorTotalPar) {
    let tbody = document.getElementById("id_tbody");
    tbody.innerHTML +=
        `<tr>
            <td>${mes}</td>
            <td>${valor.toFixed(2)}</td>
            <td>${rendimentoPar.toFixed(2)}</td>
            <td>${valorTotalPar.toFixed(2)}</td>
        </tr>`;
}
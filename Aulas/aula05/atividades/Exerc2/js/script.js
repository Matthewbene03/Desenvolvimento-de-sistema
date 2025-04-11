function calculaRendimento() {
    let valorRendimento = parseFloat(document.getElementById("id_valor").value);
    let taxaRendimento = parseFloat(document.getElementById("id_taxa").value);
    let mesesRendimento = parseInt(document.getElementById("id_qtdMeses").value);
    let rendimento = 0;
    let valorTotal = 0;

    if (((valorRendimento !== "") && (valorRendimento !== null) && (valorRendimento !== undefined))
        && ((taxaRendimento !== "") && (taxaRendimento !== null) && (taxaRendimento !== undefined))
        && ((mesesRendimento !== "") && (mesesRendimento !== null) && (mesesRendimento !== undefined))) {

        for (let i = 1; i <= mesesRendimento; i++) {
            rendimento = valorRendimento * (taxaRendimento / 100);
            valorTotal = valorRendimento + rendimento;
            valorRendimento = valorTotal;
        }

        document.getElementById("resultado").textContent = "O seu rendimento é de R$" + valorTotal.toFixed(2);
        
    } else {
        document.getElementById("resultado").innerHTML = "Valor inesperado!";
    }
}
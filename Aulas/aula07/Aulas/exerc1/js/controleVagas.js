let corpoTab = document.getElementById("id_tbody");

function preencherLinhasTabela() {
    let vetPlaca = JSON.parse(localStorage.getItem("placas"));
    let vetUsuarioSelecionado = JSON.parse(localStorage.getItem("usuarioSelecionado"));

    for (let qtdLinhas = 1; qtdLinhas <= 10; qtdLinhas++) {
        if (qtdLinhas % 2 === 0) {
            corpoTab.innerHTML +=
                `<tr class="backGroudWhite">
                    <td>${qtdLinhas}</td>
                    <td>${vetPlaca[qtdLinhas-1]}</td>
                    <td>${vetUsuarioSelecionado[qtdLinhas-1]}</td>
                </tr>`;
        } else {
            corpoTab.innerHTML +=
                `<tr class="backGroudGray">
                    <td>${qtdLinhas}</td>
                    <td>${vetPlaca[qtdLinhas-1]}</td>
                    <td>${vetUsuarioSelecionado[qtdLinhas-1]}</td>
                </tr>`;
        }
    }
}
function exibirTabela() {
	var tabela = document.getElementById("tabela");
	apagarLinhas(tabela);

	//recupera o vetor na memória secundária
	var pessoas = JSON.parse(localStorage.getItem('pessoas'));

	pessoas.forEach(pessoa => {
		adicionarLinha(tabela, pessoa)
	});
}

function adicionarLinha(tabela, pessoa) {
	// Seleciona o corpo da tabela 
	var tbody = tabela.querySelector("tbody");

	// Cria uma nova linha
	var novaLinha = document.createElement("tr");

	// Cria e adiciona na nova linha as células com os valores
	var colunaCPF = document.createElement("td");
	colunaCPF.textContent = pessoa.cpf;
	novaLinha.appendChild(colunaCPF);

	var colunaNome = document.createElement("td");
	colunaNome.textContent = pessoa.nome;
	novaLinha.appendChild(colunaNome);

	var colunaIdade = document.createElement("td");
	colunaIdade.textContent = pessoa.idade;
	novaLinha.appendChild(colunaIdade);

	// Adiciona a nova linha ao tbody
	tbody.appendChild(novaLinha);
}

function apagarLinhas(tabela) {
	// Seleciona o corpo da tabela 
	var corpoTabela = tabela.querySelector("tbody");

	// Enquanto houver linhas no corpo da tabela, remove a primeira
	while (corpoTabela.rows.length > 0) {
		corpoTabela.deleteRow(0);
	}
}

function consultar() {
	debugger
	var tabela = document.getElementById("tabela");
	apagarLinhas(tabela);

	//recupera o vetor na memória secundária
	var pessoas = JSON.parse(localStorage.getItem('pessoas'));

	var filtro = parseInt(document.getElementById("filtro").value);
	var idade = parseInt(document.getElementById("idade").value);

	switch (filtro) {
		case 1:
			pessoas.forEach(pessoa => {
				if (pessoa.idade > idade) {
					adicionarLinha(tabela, pessoa);
				}
			});
			break;

		case 2:
			pessoas
  				.filter(pessoa => pessoa.idade < idade)  // Filtra pessoas com idade < que o valor informado
  				.forEach(pessoa => adicionarLinha(tabela, pessoa));    // Chama a função imprimir para cada pessoa filtrada
			break;
	}
		/*
		   A segunda implementação é mais compacta, porém menos clara para. Portanto, utilize conforme o estilo preferido no seu código.		
		*/		



}

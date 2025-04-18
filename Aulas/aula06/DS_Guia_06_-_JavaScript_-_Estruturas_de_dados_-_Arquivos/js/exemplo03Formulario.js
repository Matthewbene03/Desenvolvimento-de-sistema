function configurar() {
    //O código a seguir verifica a existência da chave 'pessoas' no localStorage. 
    //Caso não exista, o código cria um vetor vazio e o armazena no localStorage.
    if (!localStorage.pessoas) {
        let pessoas = [];
        localStorage.setItem('pessoas', JSON.stringify(pessoas));
    }
}

function cadastrar() {
    //recupera o vetor de registros na memória secundária
    let pessoas = JSON.parse(localStorage.getItem('pessoas'));

    let pessoa = new Pessoa();
    pessoa.cpf = document.getElementById("cpf").value;
    pessoa.nome = document.getElementById("nome").value;
    pessoa.idade = parseInt(document.getElementById("idade").value);

    if(verificarCPF(pessoa.cpf, pessoas)){
        alert('O CPF informado já foi cadastrado');
    }else{
        pessoas.push(pessoa);

        //armazena o vetor na memória secundária
        localStorage.setItem('pessoas', JSON.stringify(pessoas));
    
        alert('Cadastro realizado com sucesso');
    
        //redireciona para a página da tabela
        window.location.href = "exemplo03Tabela.html";
    }
}

function verificarCPF(cpf, pessoas) {
    return pessoas.some(pessoa => pessoa.cpf == cpf);
}

/*
function verificarCPF(cpf, pessoas) {
    var resultado = false;    

    for (let posicao = 0; posicao < pessoas.length; posicao++) {
        if (cpf == pessoas[posicao].cpf) {
            resultado = true;
        }
    }
    return resultado;
}
*/

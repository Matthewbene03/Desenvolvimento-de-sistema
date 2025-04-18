class Usuario {
    constructor(user, senha) {
        this.user = user;
        this.senha = senha
    }
}

class Carro {
    constructor(placaCarro) {
        this.placaCarro = placaCarro;
    }
}

let usuarioCadastramento = document.getElementById("id_loginCad");
let senhaCadastramento = document.getElementById("id_senhaCad");
let usuarioAutenticar = document.getElementById("id_loginAut");
let senhaAutenticar = document.getElementById("id_senhaAut");
let loginUser = document.getElementById("login");
let tbody = document.getElementById("id_tbody");
let select = document.getElementById("id_numVaga");
let placaCarro = document.getElementById("id_placaCarro");
let usuarioOnline = new Usuario();


//Inicializa o localStorage com um vetor de usuarios vazio, se já não tiver um. 
function inicializarLocalStorage() {
    let vagasSelecionadas;
    let placasDisponiveis;
    let usuarioSelecionado;

    if (!localStorage.idUser) {
        let usuario = [];
        localStorage.setItem("idUser", JSON.stringify(usuario));
    }

    if (!localStorage.listaVagas) {
        vagasSelecionadas = [];
        for (let i = 0; i < 10; i++) {
            vagasSelecionadas[i] = 0;
        }
        localStorage.setItem("listaVagas", JSON.stringify(vagasSelecionadas));
    }

    if(!localStorage.placas){
        placasDisponiveis = [];
        for (let i = 0; i < 10; i++) {
            placasDisponiveis[i] = "";
        }
        localStorage.setItem("placas", JSON.stringify(placasDisponiveis));
    }

    if(!localStorage.usuarioSelecionado){
        usuarioSelecionado = [];
        for (let i = 0; i < 10; i++) {
            usuarioSelecionado[i] = "";
        }
        localStorage.setItem("usuarioSelecionado", JSON.stringify(usuarioSelecionado));
    }
}

//Faz o cadastro do usuario novo.
function cadastrarUsuario() {
    let userCadastramento = usuarioCadastramento.value;
    let senhaCad = senhaCadastramento.value;

    //Verifica se não digitou alguma informação errada que não se espera.
    if (((userCadastramento !== "") && (userCadastramento !== null) && (userCadastramento !== undefined))
        && ((senhaCad !== "") && (senhaCad !== null) && (senhaCad !== undefined))) {
        let vetUsuario = JSON.parse(localStorage.getItem("idUser"));

        //Vamos verificar se esse novo usuario já tem um login e senha cadastrado no sistema.
        if (verificarLogin(userCadastramento, vetUsuario)) {
            alert("Esse login já existe!!!");
        } else {
            //Se o usuario não tiver cadastro, cria o seu cadastro. 
            let user = new Usuario(userCadastramento, senhaCad);
            vetUsuario.push(user);
            popularLocalStorage(vetUsuario);
            alert("Cadastro de usuario realizado com sucesso!!!");
            usuarioOnline = new Usuario(userCadastramento, senhaCad);
            localStorage.setItem("userOn", JSON.stringify(usuarioOnline));

            //Depois da verificação do cadastro do usuario, vai para essa pagina do sistema.
            window.location.href = "controleVagas.html";
        }
    } else {
        alert("Você digitou informações erradas!!!")
    }

    //Limpa o campo do input
    usuarioCadastramento.value = "";
    senhaCadastramento.value = "";
}

//Faz a autentificação de um usuario que já existe no sistema.
function autenticarUsuario() {
    let userAutentificacao = usuarioAutenticar.value;
    let senhaAut = senhaAutenticar.value;

    //Verifica se não digitou alguma informação errada que não se espera.
    if (((userAutentificacao !== "") && (userAutentificacao !== null) && (userAutentificacao !== undefined))
        && ((senhaAut !== "") && (senhaAut !== null) && (senhaAut !== undefined))) {
        let vetUsuario = JSON.parse(localStorage.getItem("idUser"));

        //Vamos verificar se esse novo usuario já tem um login e senha cadastrado no sistema.
        if (verificarUsuario(userAutentificacao, senhaAut, vetUsuario)) {
            usuarioOnline = new Usuario(userAutentificacao, senhaAut);
            localStorage.setItem("userOn", JSON.stringify(usuarioOnline));
            window.location.href = "controleVagas.html";
        } else {
            //Se o usuario não tiver cadastro, informa ele sobre.
            alert("Esse login e/ou senha não existe!!!");
        }
    } else {
        alert("Você digitou informações erradas!!!")
    }

    //Limpa o campo do input
    usuarioAutenticar.value = "";
    senhaAutenticar.value = "";
}

function usuarioOn() {
    usuario = JSON.parse(localStorage.getItem("userOn"));
    loginUser.innerHTML += usuario.user;
}

function reservarVaga() {
    let placa = placaCarro.value; //Pega a placa do carro
    let numVaga = parseInt(select.value); //Pega o numero da vaga
    let userOn = JSON.parse(localStorage.getItem("userOn")); //Pega o usuario que fez login e quer fazer a reserva
    let vetVagasSelecionadas = JSON.parse(localStorage.getItem("listaVagas")); //Pega o vetor de vagas selecionadas
    for (let i = 0; i < vetVagasSelecionadas.length; i++) {
        vetVagasSelecionadas[i] = parseInt(vetVagasSelecionadas[i]); // Transforma todas os números que estão como texto em número inteiro.
    }
    atualizarTabela(numVaga, placa, userOn, vetVagasSelecionadas); //Atualiza tabela
}

//Verifica se um login já existe no sistema.
function verificarLogin(user, vetUsuario) {
    return vetUsuario.some(usuario => usuario.user == user);
}

//Verifica se uma senha já existe no sistema.
function verificarSenha(senha, vetUsuario) {
    return vetUsuario.some(usuario => usuario.senha == senha);
}

//Verifica se um usuario já existe no sistema.
function verificarUsuario(user, senha, vetUsuario) {
    return vetUsuario.some(usuario => (usuario.user === user) && (usuario.senha === senha));
}

//Adiciona os meus usuarios no LocalStorage
function popularLocalStorage(vetConta) {
    localStorage.setItem("idUser", JSON.stringify(vetConta));
}

function preencherSelect() {
    for (let qtdOp = 1; qtdOp <= 10; qtdOp++) {
        select.innerHTML +=
            `<option value="${qtdOp}">Vaga ${qtdOp}</option>`;
    }
}

function atualizarTabela(numVaga, placa, user, vetVagasSelecionadas) {
    let vetPlaca = JSON.parse(localStorage.getItem("placas"));

    let verificaVagas = vetVagasSelecionadas.some(vagas => vagas == numVaga); //Retorna true se já estiver uma vaga que queira reserva;
    let verificaPlaca = vetPlaca.some(placaComVaga => placaComVaga == placa); //Retorna true se um carro em uma vaga que queira reserva;
    let vetUsuarioSelecionado = JSON.parse(localStorage.getItem("usuarioSelecionado"));

    let corpoTabela = tbody;

    if (verificaVagas === true){
        alert("Você não pode registrar nessa vaga!!!")
    } else if(verificaPlaca === true){
        alert("Você não pode registrar esse carro em mais de uma vaga!!!")        
    } else {
        corpoTabela.deleteRow(numVaga-1);
        let novaLinha = corpoTabela.insertRow(numVaga-1);
        if(numVaga %2 === 0){
            novaLinha.classList.add("backGroudWhite")
        }else{
            novaLinha.classList.add("backGroudGray")
        }
        let coluna1 = novaLinha.insertCell(0);
        coluna1.innerHTML = "<td>" + numVaga + "</td>"
        let coluna2 = novaLinha.insertCell(1);
        coluna2.innerHTML = "<td>" + placa + "</td>"
        let coluna3 = novaLinha.insertCell(2);
        coluna3.innerHTML = "<td>" + user.user + "</td>"

        vetVagasSelecionadas[numVaga - 1] = numVaga;
        vetPlaca[numVaga - 1] = placa;
        vetUsuarioSelecionado[numVaga - 1] = user.user;
    
        localStorage.setItem("listaVagas",JSON.stringify(vetVagasSelecionadas));
        localStorage.setItem("placas",JSON.stringify(vetPlaca));
        localStorage.setItem("usuarioSelecionado",JSON.stringify(vetUsuarioSelecionado));
    }
}
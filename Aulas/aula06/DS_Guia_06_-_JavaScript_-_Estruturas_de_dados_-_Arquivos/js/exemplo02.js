class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

var pessoas = [];
var total = 0;
var media = 0;

for (let p = 0; p < 10; p++) {
  let nome = prompt("Informe o nome da pessoa "+ (p + 1)+ ":");
  let idade = parseInt(prompt("Informe a idade de " + nome));
  
  total += idade;

  let pessoa = new Pessoa(nome, idade);
  pessoas.push(pessoa)
}

media = total / pessoas.length;

pessoas.forEach(pessoa => {
  if(pessoa.idade > media){
    alert("Nome: " + pessoa.nome)
  }
});

/*
for (let i = 0; i < pessoas.length; i++) {
  if (pessoas[i].idade > media) {
    alert("Nome: " + pessoas[i].nome);
  }
}
*/





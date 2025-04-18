var idades = [];
var nomes = [];
var posicao = 0;
var media = 0;
var total = 0;

while(posicao < 10){
  nomes[posicao] = prompt("Informe o nome da pessoa "+ (posicao + 1)+ ":");
  idades[posicao] = parseInt(prompt("Informe a idade de " + nomes[posicao]));
  total = total + idades[posicao];
  posicao++;
}

media = total / 10;

for(posicao = 0; posicao < 10; posicao++){
  if(idades[posicao] > media){
    alert("Nome: " + nomes[posicao])
  }
}
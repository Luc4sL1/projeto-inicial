var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("txtnome"); 

function alertar(){
     alert(nome.value + " "+ "Voce clicou no botao!!!");
}
var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var Nnome = document.getElementById("txtnome"); 

function alertar(){
     alert(Nnome.value + " "+ "Voce clicou no botao!!!");
}
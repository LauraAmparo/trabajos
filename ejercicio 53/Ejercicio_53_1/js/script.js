

/*
Notas:
Sobresaliente: 90
Notable: 70
Aprovado: 50
Insuficiente: 0
*/
function mostrarResultado(){
let nome = document.getElementById("nome").value;
let nota = parseFloat (document.getElementById("nota").value);
console.log(nota);
let resultado = document.getElementById("resultado");

if (nota >= 90) {
    resultado.textContent = `${nome} é sobresaliente`;
} else if (nota >= 70){
    resultado.textContent = `${nome} é notable`
} else if (nota >= 50){
    resultado.textContent = `${nome} é aprovado`
} else{
    resultado.textContent = `${nome} é insuficiente`
};
}
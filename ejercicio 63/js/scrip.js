// let saludo = "Hola, mundo!";
// console.log(saludo);

let mundo = "mundo";

var nome = ("");
alert("Ola," + mundo + "!")
let idade = 25;
console.log(idade);


let Estudante = true;
console.log(Estudante);

let persoa = {
    nome: "Laura",
    idade: 48,
    ocupacion: "Enxeñeira"
};
console.log(persoa);

let coresFavoritos = ["azul", "verde", "vermello"];
console.log(coresFavoritos);

let cidadeActual = "O Milladoiro";
console.log(cidadeActual);

cidadeActual = "Bertamiráns";
console.log(cidadeActual);

let a = 10;
let b = 5;

console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);
console.log("Módulo:", a % b);


// Operador < (menor que): Compara se a é menor que b
console.log("a < b:", a < b);

// Operador > (maior que): Compara se a é maior que b
console.log("a > b:", a > b);

// Operador === (estritamente igual): Compara se a é igual a b e do mesmo tipo
console.log("a === b:", a === b);

// Operador !== (estritamente diferente): Compara se a é diferente de b ou de tipo diferente
console.log("a !== b:", a !== b);

var numero = parseInt(prompt("Introduce un numero"));
if (numero % 2 === 0) {
    alert("0 numero e par");
} else {
    alert("O número é impar")
}


// Bucle for que imprime os números do 1 ao 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Bucle while que imprime os números do 10 ao 1
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}
 let nomes = "Laura";

function saudarUsuario(nomes) {
    console.log("Ola, " + nomes + "!");
}
saudarUsuario(nomes);

function atoparMaiorNumero(numeros) {
    let maior = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    return maior;
}


let numeros = [3, 7, 2, 9, 5];
console.log("O número máis grande é:", atoparMaiorNumero(numeros));

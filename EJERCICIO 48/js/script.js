
var nom = prompt("Introduce o teu nome");
alert("Ola,"+ nome + "!");




var num12 = parseFloat(prompt("introduce o primeiro número"));
var num22 = parseFloat(prompt("Intrduce el segundo número"));
var sumas = num12 + num22;
alert("A suma é:" + sumas)

var numero = parseInt(prompt("Introduce un número para ver a súa táboa de multiplicar"));
for (let i=1; i <= 10; i++) {
    console.log(numero + "x" + i + "=" + numero*i);
}
var numero = parseInt(prompt("Introduce un numero"));
if(numero % 2 === 0){
    alert("0 numero e par");
} else {
    alert("O número é impar")
}
function sumar(a,b){
    return a +b;
    }
    function restar(a,b){
        return a-b;
    }
    function multiplicar(a,b){
    return a*b;
    }
    function sumar(a,b){
    return a +b;
    }
    function restar(a,b){
        return a-b;
    }

    function dividir(a,b){
    if(b!==0){
        return a/b;
    }else{
        return "Erro:Non se pode dividir por cero.";
    }
    }
    console.log("Suma:" + sumar(5,3));
    console.log("Resta:" + restar(8,4));
    console.log("Multiplicación:" + multiplicar(2,6));
    console.log("División:" + dividir(10,2)); 

//Obtener referencias a los elementos del DOM
const inputNumero1 = document.getElementById("numero1");
const inputNumero2 = document.getElementById("numero2");
const resultadosDiv = document.getElementById("resultados");

//Función para realizar operaciones y mostrar resultados
function realizarOperaciones(){

// Obtener los valores de los campos de entrada
const numero1 = parseFloat(inputNumero1.value);
const numero2 = parseFloat(inputNumero2.value);

//Verificar si los valores son válidos
if (isNaN(numero1) || isNaN(numero2)){
    resultadosDiv.textContent = "Por favor, introduce números válidos";
    return;
}
//Mostrar resultados en la interfaz
resultadosDiv.textContent = `
Suma:${sumar(numero1,numero2)}
Resta:${restar(numero1,numero2)}
Multiplicación:${multiplicar(numero1,numero2)}
División:${dividir(numero1,numero2)}
`;
}
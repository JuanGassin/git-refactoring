function Calculadora(){
 let operacion = 0, number01, number02, resultado;

operacion = document.getElementById("Operacion").value.split(" ");
number01 = parseFloat(document.getElementById("Numero01").value.split(" "));
number02 = parseFloat(document.getElementById("Numero02").value.split(" "));

if(operacion == 1){
    window.alert("Has elegido el número 1, sumar");
    resultado = number01 + number02;

}

if(operacion == 2){
    window.alert("Has elegido el número 2, restar");
    resultado = number01 - number02;

}


if(operacion == 3){
    window.alert("Has elegido el número 3, multiplicar");
    resultado = number01 * number02;

}


if(operacion == 4){
    window.alert("Has elegido el número 2, dividir");
    resultado = number01 / number02;

}
window.alert(resultado);
}


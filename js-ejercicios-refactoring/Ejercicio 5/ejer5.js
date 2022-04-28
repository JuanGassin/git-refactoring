function Operacion(){
 let a = 0, a1, a2, resultado, resultado1, resultado2, resultado3;

a = document.getElementById("a0").value.split(" ");
a1 = parseFloat(document.getElementById("a1").value.split(" "));
a2 = parseFloat(document.getElementById("a2").value.split(" "));

if(a == 1){
    window.alert("Has elegido el número 1, sumar");

        resultado = a1 + a2;

        window.alert(resultado);
}

if(a == 2){
    window.alert("Has elegido el número 2, restar");

        resultado1 = a1 - a2;

        window.alert(resultado1);
}


if(a == 3){
    window.alert("Has elegido el número 3, multiplicar");

        resultado2 = a1 * a2;

        window.alert(resultado2);
}


if(a == 4){
    window.alert("Has elegido el número 2, dividir");

        resultado3 = a1 / a2;

        window.alert(resultado3);
}
}


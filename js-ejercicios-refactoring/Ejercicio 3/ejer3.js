function CuentaPalabras(){

    let a, cuantas, primera, ultima, palabras;

    a = document.getElementById("a0").value.split(" ");
    if(a){
        cuantas = a.length;
    
        primera = a[0];
    
        ultima = a[a.length - 1];
    
        document.getElementById("a4").innerHTML="Número de palabras: " + cuantas;
        document.getElementById("a5").innerHTML="Primera palabra: " + primera;
        document.getElementById("a6").innerHTML= "Última palabra: " + ultima;
    }else{

    }
  

}


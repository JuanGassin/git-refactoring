function CuentaPalabras(){

    let array, cuantas, primera, ultima;

    array = document.getElementById("a0").value.split(" ");
    if(array){
        cuantas = array.length;
    
        primera = array[0];
    
        ultima = array[array.length - 1];
    
        document.getElementById("a4").innerHTML="Número de palabras: " + cuantas;
        document.getElementById("a5").innerHTML="Primera palabra: " + primera;
        document.getElementById("a6").innerHTML= "Última palabra: " + ultima;
    }else{

    }
  

}


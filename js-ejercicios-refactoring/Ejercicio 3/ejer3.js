function CuentaPalabras(){

    var Palabras = document.getElementById("CuentaPalabras").value.split(" ")

    document.getElementById("NumeroPalabras").innerHTML="Número de palabras: " + Palabras.length
    document.getElementById("PrimeraPalabra").innerHTML="Primera palabra: " + Palabras[0]
    document.getElementById("UltimaPalabra").innerHTML= "Última palabra: " + Palabras[a.length - 1]
}


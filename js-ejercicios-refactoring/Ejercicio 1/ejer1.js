function insertarName(evt) {
    evt.preventDefault();
  
    let nombre = document.getElementById("nombre").value;
    
    if (nombre == "") {
      alert("El nombre no puede estar vacio");
    } 

    let n = nombre;
    let name;

    if (n != ""){
      let opcion = "<li> " + n + "</li>";
  
      let lista = document.getElementById("lista-nombres");
  
      lista.innerHTML += opcion;
  
      alert("Se ha insertado el nombre");
    }

  }
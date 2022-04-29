function insertarName(evt) {
    evt.preventDefault();
  
    let nombre = document.getElementById("nombre").value;
    
    if (nombre == "") {
      alert("El nombre no puede estar vacio");
    }
    else
    {
      let opcion = "<li> " + nombre + "</li>";
  
      document.getElementById("lista-nombres").innerHTML += opcion;
  
      alert("Se ha insertado el nombre");
    }                  
  }
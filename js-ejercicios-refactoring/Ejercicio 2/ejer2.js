function JuegoDeSuerte(){
    let aleatorio = Math.floor((Math.random() * 15) + 1);

    if(aleatorio>=1 && aleatorio<=5)
    {
        window.alert(aleatorio + ", Has ganado un Iphone");
    }
    else if(aleatorio>=6 && aleatorio<=10)
    {
        window.alert(aleatorio + ", No ganaste nada");
    }
    else
    {
        window.alert(aleatorio + ", Ganaste un coche");
    }
}
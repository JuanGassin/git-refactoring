function saludar() {

    let hora_actual = new Date().getHours();

    if ((hora_actual >= 6) && (hora_actual <= 12)) {
    
        alert('Buenos días');
        document.write('Es por la mañanita')
    }

     else if (hora_actual <= 20) {
    
        alert('Buenas tardes');
        document.write('Es por la tarde');
    } 
    else{
        alert('Buenas noches');
        document.write('Es por la noche');
    }
   
}
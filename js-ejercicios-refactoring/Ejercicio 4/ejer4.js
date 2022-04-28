function saludar() {

    let hora_actual = new Date().getHours();

    if ((hora_actual >= 6) && (hora_actual <= 12)) {

    alert('Buenos' + ' días');

    }

    if ((hora_actual >= 13) && (hora_actual <= 20)) {

    alert('Buenas tardes');

    } 

    if(hora_actual > 20){
    alert('Buenas noches');
    }

    if ((hora_actual >= 6) && (hora_actual <= 12)){
        document.write('Es por la mañanita')
    }

    if ((hora_actual >= 13) && (hora_actual <= 20)) {

        document.write('Es por la tarde');

        } 

        if(hora_actual > 20){

            document.write('Es por la noche');

            }
    }
}
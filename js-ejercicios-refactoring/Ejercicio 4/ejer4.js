function saludar() {
    var lahoraqueesenestemomento = new Date().getHours();

    if ((lahoraqueesenestemomento >= 6) && (lahoraqueesenestemomento <= 12)) {
    alert('Buenos' + ' días');
    }

    if ((lahoraqueesenestemomento >= 13) && (lahoraqueesenestemomento <= 20)) {
    alert('Buenas' + ' tardes');
    } 

    if(lahoraqueesenestemomento > 20){
    alert('Buenas' + ' noches');
    }

    if ((lahoraqueesenestemomento >= 6) && (lahoraqueesenestemomento <= 12)){
        document.write('Es por la mañanita')
    }

    if ((lahoraqueesenestemomento >= 13) && (lahoraqueesenestemomento <= 20)) {
        document.write('Es por la tarde');
        } 

        if(lahoraqueesenestemomento > 20){
            document.write('Es por la noche');
            }
    }

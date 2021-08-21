let reservas = false

while (reservas == false) {


    const disponibilidad = () => {
        let tipoCabaña = ''
        let cabañas = parseInt(prompt("Indique la cantidad de huespedes para reservar una cabaña: \n 1 - 1 0 2 personas ---> cabaña pequeña \n 2 - 3 0 4 personas ---> cabaña mediana \n 3 - 5 0 6 personas ---> cabaña grande \n 4 - 7 o mas personas ---> cabaña muy grande"));

        switch (cabañas) {
            case 1:
                tipoCabaña = 'cabaña pequeña'
                break;
            case 2:
                tipoCabaña = 'cabaña mediana'
                break;
            case 2:
                tipoCabaña = 'cabaña grande'
                break;
            case 4:
                tipoCabaña = 'cabaña muy grande'
                break;
            default:
                break;
        }

        let mesIngreso = prompt('Escriba el mes de ingreso')
        let diaIngreso = parseInt(prompt(`Escriba el dia de igreso en ${mesIngreso}`))
        let mesEgreso = prompt('Escriba el mes de egreso')
        let diaEgreso = parseInt(prompt(`Escriba el dia de egreso en ${mesEgreso}`))


        if (((mesIngreso !== 'enero') && (mesIngreso !== 'febrero')) && (mesEgreso !== 'enero' && (mesEgreso !== 'febrero'))) {

            alert(`Su estadia será entre el ${diaIngreso} de ${mesIngreso} y el ${diaEgreso} de ${mesEgreso} en una ${tipoCabaña}. Será contactado a la brevedad.`)
            reservas = true

        } else {
            alert('Disculpe! No hay disponibilidad para la fecha seleccionada.')
        }
    };

    disponibilidad();

}

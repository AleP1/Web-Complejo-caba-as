class Booking {

    constructor(checkInMonth, checkInDay, checkOutMonth, checkOutDay, name, email, phone) {

        this.checkInMonth = checkInMonth;
        this.checkInDay = checkInDay;
        this.checkOutMonth = checkOutMonth;
        this.checkOutDay = checkOutDay;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    bookingData() {
        let reservas = false

        while (reservas == false) {
            
            const disponibilidad = () => {
                let tipoCabaña = ''
                let cabañaElegida = false

                let cabañas = parseInt(prompt("Indique la cantidad de huespedes para reservar una cabaña: \n 1 - 1 0 2 personas ---> cabaña pequeña \n 2 - 3 0 4 personas ---> cabaña mediana \n 3 - 5 0 6 personas ---> cabaña grande \n 4 - 7 o mas personas ---> cabaña muy grande"));

                switch (cabañas) {
                    case 1:
                        tipoCabaña = 'cabaña pequeña'
                        cabañaElegida = true
                        break;
                    case 2:
                        tipoCabaña = 'cabaña mediana'
                        cabañaElegida = true
                        break;
                    case 2:
                        tipoCabaña = 'cabaña grande'
                        cabañaElegida = true
                        break;
                    case 4:
                        tipoCabaña = 'cabaña muy grande'
                        cabañaElegida = true
                        break;
                    default:
                        alert('La opción es incorrecta!')
                        reservas = false
                        cabañaElegida = false
                        break;
                }

                if (((mesIngreso !== 'enero') && (mesIngreso !== 'febrero')) && (mesEgreso !== 'enero' && (mesEgreso !== 'febrero'))) {
                    if(cabañaElegida === true){
                        alert(`Su estadia será entre el ${diaIngreso} de ${mesIngreso} y el ${diaEgreso} de ${mesEgreso} en una ${tipoCabaña}. Será contactado a la brevedad.`)
                        reservas = true
                    }
                } else {
                    alert('Disculpe! No hay disponibilidad para la fecha seleccionada.')
                    reservas = false
                }
            };
            disponibilidad();
        }
        const data = {
            checkInMonth: mesIngreso,
            checkInDay: diaIngreso,
            checkOutMonth: mesEgreso,
            checkOutDay: diaEgreso,
            name: nombre,
            email: mail,
            phone: telefono
        }
        console.log(`${data}`);
    }
}

const mesIngreso = prompt('Escriba el mes de ingreso')
const diaIngreso = parseInt(prompt(`Escriba el dia de igreso en ${mesIngreso}`))
const mesEgreso = prompt('Escriba el mes de egreso')
const diaEgreso = parseInt(prompt(`Escriba el dia de egreso en ${mesEgreso}`))
const nombre = prompt('Escriba su nombre')
const mail = prompt('Escriba un Email')
const telefono = prompt('Escriba su Telefono')

const newBooking = new Booking(mesIngreso, diaIngreso, mesEgreso, diaEgreso, nombre, mail, telefono);
newBooking.bookingData();

//Array con todas las reservas

const bookingList = [];
bookingList.push(newBooking);
console.log(`${bookingList}`);






class Booking {


    constructor(id, checkInMonth, checkInDay, checkOutMonth, checkOutDay, name, email, phone) {
        this.id = id;
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
                    if (cabañaElegida === true) {
                        alert(`Su estadia será entre el ${diaIngreso} de ${mesIngreso} y el ${diaEgreso} de ${mesEgreso} en una ${tipoCabaña}. Será contactado a la brevedad.`)
                        reservas = true
                        let editTag = document.getElementById('form')
                        editTag.innerHTML = `<div>FELICITACIÓNES!!! HAS COMPLETADO TU RESERVA </div>`

                    }
                } else {
                    alert('Disculpe! No hay disponibilidad para la fecha seleccionada.')
                    reservas = false
                }
            };
            disponibilidad();
        }
        const data = {
            id: id,
            checkInMonth: mesIngreso,
            checkInDay: diaIngreso,
            checkOutMonth: mesEgreso,
            checkOutDay: diaEgreso,
            name: nombre,
            email: mail,
            phone: telefono
        }
        console.log(data);
    }
}
let nroId = 1;

const id = nroId + 1
const mesIngreso = prompt('Escriba el mes de ingreso')
const diaIngreso = parseInt(prompt(`Escriba el dia de igreso en ${mesIngreso}`))
const mesEgreso = prompt('Escriba el mes de egreso')
const diaEgreso = parseInt(prompt(`Escriba el dia de egreso en ${mesEgreso}`))
const nombre = prompt('Escriba su nombre')
const mail = prompt('Escriba un Email')
const telefono = prompt('Escriba su Telefono')

const newBooking = new Booking(id, mesIngreso, diaIngreso, mesEgreso, diaEgreso, nombre, mail, telefono);
newBooking.bookingData();

//Array con todas las reservas

const bookingList = [];
bookingList.push(newBooking);
console.log(bookingList);

for (const booking of bookingList) {
    let container = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    container.innerHTML = `<div class="col-md-5"><h3> Reserva numero: ${booking.id} </h3>
                            <p>  A nombre de: ${booking.name }</p>
                            <p> Email: ${booking.email} </p>
                            <p>  Telefono: ${booking.phone} </p>
                            <p> Desde el ${booking.checkInDay} de ${booking.checkInMonth} </p>
                            <p> Al ${booking.checkOutDay} de ${booking.checkOutMonth} </p></div>`;

    document.body.appendChild(container);
}

localStorage.setItem('Reservas', bookingList)

let reserva = localStorage.getItem('Reservas')
console.log(localStorage)




/*class Booking {

    constructor(checkInDay, checkOutDay, name, email, phone, comments, type) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.checkInDay = checkInDay;
        this.checkOutDay = checkOutDay;
        this.comments = comments;
        this.type = type;
    }
    click() {
        const diaIngreso = document.getElementById('form__checkin').value
        const diaEgreso = document.getElementById('form__checkout').value
        const nombre = document.getElementById('form__name').value
        const mail = document.getElementById('form__email').value
        const telefono = document.getElementById('form__phone').value
        const comentarios = document.getElementById('form__comments').value
        const tipo = document.getElementById('form__type').value
        const click = document.getElementById('form__send').onclick

        const newBooking = new Booking(diaIngreso, diaEgreso, nombre, mail, telefono, comentarios, tipo);

        newBooking.bookingData();
        bookingList.push(newBooking.bookingData());
        console.log(bookingList);
    }

    bookingData() {
        //Datos de la reserva que seran guardados en un JSON
        const data = {
            checkInDay: diaIngreso,
            checkOutDay: diaEgreso,
            name: nombre,
            email: mail,
            phone: telefono,
            comments: comentarios,
            type: tipo
        }
        console.log(data);
    }
}

//Array con todas las reservas
const bookingList = [];*/
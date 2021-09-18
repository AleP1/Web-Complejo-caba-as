class Booking {

    constructor(id, checkInDay, checkOutDay, name, email, phone, comments, type) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.checkInDay = checkInDay;
        this.checkOutDay = checkOutDay;
        this.comments = comments;
        this.type = type;
    }
    bookingData() {
        const data = {
            id: this.id,
            checkInDay: this.checkInDay,
            checkOutDay: this.checkOutDay,
            name: this.name,
            email: this.email,
            phone: this.phone,
            comments: this.comments,
            type: this.type
        }
        console.log("Data es: " + data);
    }
}

//Array con todas las reservas
const bookingList = [];

function editDom() {
    for (const booking of bookingList) {
        const modal = ` <p> Su nro de reserva es: ${booking.id} </p>
                            <p>  A nombre de: ${booking.name}</p>
                            <p> Email: ${booking.email} </p>
                            <p>  Telefono: ${booking.phone} </p>
                            <p> Desde el ${booking.checkInDay} </p>
                            <p> Al ${booking.checkOutDay} </p>
                            <p><strong>Será contactado a la brevedad</strong>`

        $("#modal").append(modal)
    }
}


//Eventos
$("#form__send").on("click", submit);

function submit() {

    const id = Math.floor(Math.random() * (1000000 - 1)) + 1
    const diaIngreso = $("#form__checkin").val()
    const diaEgreso = $("#form__checkout").val()
    const nombre = $("#form__name").val()
    const mail = $("#form__email").val()
    const telefono = $("#form__phone").val()
    const comentarios = $("#form__comments").val()
    const tipo = $("#form__type").val()

    const newBooking = new Booking(id, diaIngreso, diaEgreso, nombre, mail, telefono, comentarios, tipo);
    console.log('newBooking es: ' + JSON.stringify(newBooking))
    bookingList.push(newBooking);
    console.log("La lista de reservas es: " + JSON.stringify(bookingList));
    editDom();

    //LocalStorage
    const Storage = () => {

        const guardarEnLocalStorage = (clave, valor) => { localStorage.setItem(clave, valor) };

        for (let i = 0; i < bookingList.length; i++) {
            guardarEnLocalStorage(`${ i } `, JSON.stringify(bookingList[i]))
        }
        console.log('localStorage es: ' + JSON.stringify(localStorage))
    }
    Storage()
}
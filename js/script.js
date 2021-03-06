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
}

//Array con todas las reservas


function editDom(newBooking) {
    const modal = ` <p> Su nro de reserva es: ${newBooking.id} </p>
                            <p>  A nombre de: ${newBooking.name}</p>
                            <p> Email: ${newBooking.email} </p>
                            <p>  Telefono: ${newBooking.phone} </p>
                            <p> Desde el ${newBooking.checkInDay} </p>
                            <p> Al ${newBooking.checkOutDay} </p>
                            <p><strong>Será contactado a la brevedad</strong>`
    $(".modal-body").append(modal)
    $("#form__send").on("click", function() {
        $("#exampleModal").show()
    })
}


/*$("#form__send").on("click", function submit() {

    console.log("pasa por submit")
    const id = Math.floor(Math.random() * (1000000 - 1)) + 1
    const diaIngreso = $("#form__checkin").val()
    const diaEgreso = $("#form__checkout").val()
    const nombre = $("#form__name").val()
    const mail = $("#form__email").val()
    const telefono = $("#form__phone").val()
    const comentarios = $("#form__comments").val()
    const tipo = $("#form__type").val()
    console.log("pasa por submit")

    const newBooking = new Booking(id, diaIngreso, diaEgreso, nombre, mail, telefono, comentarios, tipo);
    console.log('newBooking es: ' + JSON.stringify(newBooking))
    bookingList.push(newBooking);
    console.log("La lista de reservas es: " + JSON.stringify(bookingList));
    editDom(newBooking);
})*/

//AJAX con JQuery
$("#save").click(() => {
    APIURL = 'https://jsonplaceholder.typicode.com/posts'

    infoPost = newBooking;

    $.ajax({
        method: "POST",
        url: APIURL,
        data: infoPost,
        success: function(respuesta) {
            console.log(`Los datos se han guardado correctamente: ${JSON.stringify(respuesta)}`)
        }
    });
});


//LocalStorage
const storage = (bookingList) => {
    console.log(bookingList);
    const guardarEnLocalStorage = (clave, valor) => { localStorage.setItem(clave, valor) };

    for (let i = 0; i < bookingList.length; i++) {
        guardarEnLocalStorage("Reservas", JSON.stringify(bookingList))
    }
}
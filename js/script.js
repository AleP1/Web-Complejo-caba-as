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
const bookingList = [];

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
    editDom(newBooking);

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
    const Storage = () => {

        const guardarEnLocalStorage = (clave, valor) => { localStorage.setItem(clave, valor) };

        for (let i = 0; i <= bookingList.length; i++) {
            guardarEnLocalStorage(`Reservas`, JSON.stringify(bookingList[i]))
        }
        console.log('localStorage es: ' + JSON.stringify(localStorage))
    }
    Storage()
}

//Animaciones
$("body").fadeIn("slow");
$(".services__cards-card").click(() => {
    $(".services__cards-card").fadeOut("fast", function() {
        return $(".services__cards-card").fadeIn("fast");
    })
});

/*$(".services").ready(function() {
    $(".card-1").fadeIn(400, function() {
        $(".card-2").fadeIn(400, function() {
            $(".card-3").fadeIn(400, function() {
                $(".card-4").fadeIn(400, function() {
                    $(".card-5").fadeIn(400, function() {
                        $(".card-6").fadeIn(400, function() {
                            $(".card-7").fadeIn(400, function() {
                                $(".card-8").fadeIn(400);
                            });
                        });
                    });
                });
            });
        });
    });
});*/

$("#form").slideDown(1000);

//Carousel de comentarios

var cards = $('#card-slider .slider-item').toArray();

startAnim(cards);

function startAnim(array) {
    if (array.length >= 4) {
        TweenMax.fromTo(array[0], 0.5, { x: 0, y: 0, opacity: 0.75 }, { x: 0, y: -120, opacity: 0, zIndex: 0, delay: 0.03, ease: Cubic.easeInOut, onComplete: sortArray(array) });

        TweenMax.fromTo(array[1], 0.5, { x: 79, y: 125, opacity: 1, zIndex: 1 }, { x: 0, y: 0, opacity: 0.75, zIndex: 0, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: Cubic.easeInOut });

        TweenMax.to(array[2], 0.5, { bezier: [{ x: 0, y: 250 }, { x: 65, y: 200 }, { x: 79, y: 125 }], boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', zIndex: 1, opacity: 1, ease: Cubic.easeInOut });

        TweenMax.fromTo(array[3], 0.5, { x: 0, y: 400, opacity: 0, zIndex: 0 }, { x: 0, y: 250, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut }, );
    } else {
        $('#card-slider').append('<p>Sorry, carousel should contain more than 3 slides</p>')
    }
}

function sortArray(array) {
    clearTimeout(delay);
    var delay = setTimeout(function() {
        var firstElem = array.shift();
        array.push(firstElem);
        return startAnim(array);
    }, 3000)
}
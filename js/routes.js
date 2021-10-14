window.addEventListener(newFunction(), () => {
    console.log(window.location.hash)
    router(window.location.hash)
    jQuery(window.location.hash)
})

const content = document.getElementById('app')

const router = (hash) => {
    content.innerHTML = " ";
    switch (hash) {
        case '#/':
            {
                content.appendChild(home());
                break;
            }
        case '#/cabanas':
            {
                content.appendChild(cabanas());
                break;
            }
        case '#/contacto':
            {
                content.appendChild(contacto());
                break;
            }
        case '#/dondeEstamos':
            {
                content.appendChild(dondeEstamos());
                break;
            }
        case '#/reserva':
            {
                content.appendChild(reserva());
                break;
            }
        case '#/servicios':
            {
                content.appendChild(servicios());
                break;
            }
        default:
            content.appendChild(noMatch());
            console.log("404")
            break;
    }
}


function newFunction() {
    return 'hashchange'
}

const jQuery = (hash) => {

    switch (hash) {
        case '#/':
            {
                $(".carousel__section").fadeIn(2000);
                break;
            }
        case '#/contacto':
            {
                $(".contacto").slideDown(1000);
                break;
            }
        case '#/reserva':
            {
                $("#form").slideDown(1000);
                break;
            }
        case '#/servicios':
            {
                $(".services__cards-card").click(() => {
                    $(".services__cards-card").fadeOut("fast", function() {
                        return $(".services__cards-card").fadeIn("fast");
                    })
                });

                $(".services").ready(function() {
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
                });
                break;
            }
    }
}
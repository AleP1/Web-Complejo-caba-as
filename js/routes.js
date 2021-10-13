window.addEventListener(newFunction(), () => {
    console.log(window.location.hash)
    router(window.location.hash)
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
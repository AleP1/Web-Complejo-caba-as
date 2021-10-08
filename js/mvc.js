const home = () => {
    const div = document.createElement('div')
    const views = `<section class="carousel__section ">
    <div id="carouselExampleFade " class="carousel slide carousel-fade " data-bs-ride="carousel ">
        <div class="carousel-inner ">
            <div class="carousel-item active ">
                <img src="https://sitios.interwa.com/s/s3/fotos/sitio-nuevo-3-1588597830.jpg " class="d-block w-100 " alt="carousel image ">
            </div>
            <div class="carousel-item ">
                <img src="https://sitios.interwa.com/s/s3/fotos/sitio-nuevo-3-1588597863.jpg " class="d-block w-100 " alt="carousel image ">
            </div>
            <div class="carousel-item ">
                <img src="https://mapio.net/images-p/51107345.jpg " class="d-block w-100 " alt="carousel image ">
            </div>
        </div>
        <button class="carousel-control-prev " type="button " data-bs-target="#carouselExampleFade " data-bs-slide="prev ">
            <span class="carousel-control-prev-icon " aria-hidden="true "></span>
            <span class="visually-hidden ">Previous</span>
        </button>
        <button class="carousel-control-next " type="button " data-bs-target="#carouselExampleFade " data-bs-slide="next ">
            <span class="carousel-control-next-icon " aria-hidden="true "></span>
            <span class="visually-hidden ">Next</span>
        </button>
    </div>
</section>
`;
    div.innerHTML = views;

    return div;
}
const reserva = () => {
    const div = document.createElement('div')
    const views = `<form id="form" action="" class="row g-3">
    <div class="col-md-5">
        <label for="form__name" class="form-label">Nombre completo:</label>
        <input id="form__name" class="form-control" type="text" name="name">

        <label for="form__phone" class="form-label">telefono: </label>
        <input id="form__phone" class="form-control" type="tel" name="phone">

        <label for="form__email" class="form-label">Email: </label>
        <input id="form__email" class="form-control" type="email" name="email">

        <label for="form__checkin" class="form-label">Check In: </label>
        <input id="form__checkin" class="form-control" type="date" name="checkin">

        <label for="form__checkout" class="form-label">Check Out:</label>
        <input id="form__checkout" class="form-control" type="date" name="checkout">

        <label for="form__comments" class="form-label">Comentarios: :</label>
        <input id="form__comments" class="form-control" type="textarea" name="comments">

        <label>Tipo de cabaña: </label>
        <input list="form__type">
        <datalist id="form__type">
            <option value="Cabaña pequeña(2 personas)" />
            <option value="Cabaña mediana(3 o 4 personas)" />
            <option value="Cabaña grande(5 o 6 personas)" />
            <option value="Cabaña muy grande(7 o máspersonas)" />
        </datalist>

        <div class="container">
            <div class="col-12 form__buttons">
                <button id="form__send" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Enviar solicitud</button>
                <input id="form__reset" type="reset" class="btn btn-primary" value="Borrar">
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Su reserva se a completado con exito!</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button id="save" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
</form>`;
    div.innerHTML = views;

    return div;
}
const cabanas = () => {
    const div = document.createElement('div')
    const views = "<h2>cabañas</h2>";
    div.innerHTML = views;

    return div;
}
const contacto = () => {
    const div = document.createElement('div')
    const views = "<h2>Contacto</h2>";
    div.innerHTML = views;
    console.log('pasa por acá');
    return div;
}
const dondeEstamos = () => {
    const div = document.createElement('div')
    const views = `<div class="container-fluid"><h4>Ubicación de las cabañas</h4><p>Ubicado en pleno centro de la ciudad de San Martín de los Andes, a solo 8 cuadras de lago Lacar. En las inmediaciones del apart podrá encontrar todo lo que necesite, supermercado, farmacias, banco con cajero automatico, para que su estadía sea cómoda y placentera.</p><div class="mapouter row">
        <div class="gmap_canvas col-md-12 col-lg-8"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=650&amp;height=400&amp;hl=en&amp;q=san Martin de los andes, argentina&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.fnfgo.com/">FNF Online</a></div>
        <style>
            .mapouter {
                position: relative;
                text-align: right;
                width: 650px;
                height: 400px;
            }
            .gmap_canvas {
                overflow: hidden;
                background: none!important;
                width: 650px;
                height: 400px;
            }
            .gmap_iframe {
                width: 650px!important;
                height: 400px!important;
            }
        </style></div></div>`;
    div.innerHTML = views;
    return div;
}
const servicios = () => {
    const div = document.createElement('div')
    const views = `<section class="services ">
    <h3 class="services__title ">SERVICIOS</h3>
    <div class="services__cards ">
        <div class="services__cards-card card-1 ">
            <img src="https://sitios.interwa.com/s/s3/fotos/sitio-nuevo-3-1588597830.jpg" alt="cabaña ">
            <p>Cabañas equipadas</p>
        </div>
        <div class="services__cards-card card-2 ">
            <img src="https://sitios.interwa.com/s/s3/fotos/sitio-nuevo-3-1588597863.jpg" alt="toallas ">
            <p>Servicio de mucama</p>
        </div>
        <div class="services__cards-card card-3 ">
            <img src="https://sitios.interwa.com/s/s3/fotos/apart-y-caban-as-del-bosque-1588599528.jpg" alt="desayuno ">
            <p>Desayunos</p>
        </div>
        <div class="services__cards-card card-4 ">
            <img src="https://mapio.net/images-p/51107345.jpg " alt="juegos para niños ">
            <p>Juegos para niños</p>
        </div>
        <div class="services__cards-card card-5 ">
            <img src="https://fotos.alquilerargentina.com/v7/propiedades/fz73/fz73-Apart-J95FWL18.jpg?p=listado_sm" alt="piscina ">
            <p>Piscina</p>
        </div>
        <div class="services__cards-card card-6 ">
            <img src="https://cdn0.casamientos.com.ar/vendor/4291/3_2/960/png/exterior.jpeg " alt="parque ">
            <p>parque</p>
        </div>
        <div class="services__cards-card card-7 ">
            <img src="https://fotos.alquilerargentina.com/v7/propiedades/fz73/fz73-Apart-J95FWL18.jpg?p=listado_sm" alt="piscina ">
            <p>Piscina</p>
        </div>
        <div class="services__cards-card card-8 ">
            <img src="https://cdn0.casamientos.com.ar/vendor/4291/3_2/960/png/exterior.jpeg" alt="parque ">
            <p>parque</p>
        </div></div></section>`;
    div.innerHTML = views;
    return div;
}
const noMatch = () => {
    const div = document.createElement('div')
    const views = "<h2>404</h2>";
    div.innerHTML = views;

    return div;
}
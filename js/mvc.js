const home = () => {
    const div = document.createElement('div')
    const views = `<section class="carousel__section" style="display:none;">
    <div id="carouselExampleFade" class="carousel slide carousel-fade " data-bs-ride="carousel ">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://sitios.interwa.com/s/s3/fotos/slide-1-0-xl.jpg?date=2021.03.24.0.08.34" class="d-block w-100 " alt="carousel image ">
            </div>
            <div class="carousel-item">
                <img src="https://phantom-elmundo.unidadeditorial.es/9d5f3a56f065f1c845f785c069c0bfba/resize/746/f/jpg/assets/multimedia/imagenes/2021/05/10/16206360937901.jpg" class="d-block w-100 " alt="carousel image ">
            </div>
            <div class="carousel-item">
                <img src="http://www.elrefugiodepuelo.com/wp-content/uploads/2018/11/Terraza-1.jpg" class="d-block w-100 " alt="carousel image ">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
</section>
<section class="apart__section">
    <div class="apart__section-div">
        <h1 style="text-align: center; ">APART Y CABAÑAS</h1>
        <p style="text-align: center; ">La calidad en las terminaciones, donde la madera de roble y de raulí se combinan con el ladrillo a la vista y las tejuelas de alerce en los techos; los desniveles que articulan los espacios en el interior de las cabañas, son
            algunos de los elementos que distinguen a <strong>Apart y Cabañas del Bosque </strong>como un complejo de primera categoría en <strong>San Martín de los Andes</strong>.
        </p>
        <p style="text-align: center; ">Ubicado en pleno centro de la ciudad y rodeado por amplios y hermosos jardines el complejo <strong>Apart y Cabañas del Bosque</strong> se destaca por ser un oasis de naturaleza, buen gusto y calidad en la provincia del Neuquén.
            El <strong>Lago Lacar,</strong> la Ruta de los 7 Lagos y parte de la Ruta 40, camino que lleva al centro de <strong>Ski Chapelco</strong>, son algunos de los paseos turísticos cercanos a nuestro complejo.</p>
    </div>
</section>
<section class="img__section">
    <a href="#/cabanas"><img src="https://sitios.interwa.com/s/s3/fotos/foto-2-0-s.jpg?date=2021.03.24.0.08.34" alt="hotel image"></a>
    <a href="#/cabanas"><img src="https://sitios.interwa.com/s/s3/fotos/foto-2-3-s.jpg?date=2021.03.24.0.08.34" alt="hotel image"></a>
    <a href="#/cabanas"><img src="https://sitios.interwa.com/s/s3/fotos/foto-2-2-s.jpg?date=2021.03.24.0.08.34" alt="hotel image"></a>
    <a href="#/cabanas"><img src="https://sitios.interwa.com/s/s3/fotos/foto-2-1-s.jpg?date=2021.03.24.0.08.34" alt="hotel image"></a>
</section>
<section class="apart__section">
    <div class="apart__section-div">
        <h1 style="text-align: center; ">Comodidades de las cabañas</h1>
        <p style="text-align: center; ">La piscina abierta todo el año, Wi-Fi gratuito disponible en todo el apart, aparcamiento privado gratuito, salón con parrilla, son algunos de los servicios que brinda el complejo. Las cabañas cuentan con todo el equipamiento
            necesario para una placentera estadía.
        </p>
        <p style="text-align: center; ">Cocina full equipada, ropa blanca y toallas, baño privado con secador de pelo en cada unidad, TV Led en living y dormitorio, hogar a leña en todas las cabañas y una cálida atención familiar hacen que Apart y Cabañas del Lago
            sea una perfecta elección.</p>
    </div>
</section>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js " integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM " crossorigin="anonymous "></script>
<script src="https://code.jquery.com/jquery-3.6.0.js " integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin=" anonymous "></script>
<script src="js\script.js "></script>
<script src="js\mvc.js "></script>
<script src="js\routes.js "></script>
`;
    div.innerHTML = views;

    return div;
}

function reserva() {
    const div = document.createElement('div');
    const views = `<form id="form" action="" class="row g-3" style="display:none;"><div class="col-md-5">
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
    const views = `
	<section class="section_cabañas">
		<div  class="section_cabañas-content">
			<img  src="https://sitios.interwa.com/s/s3/fotos/sitio-nuevo-3-1588598974.jpg" alt="" id="IMG_4" />
		</div>
        <div class="apart__section">
            <div class="apart__section-div">
                <h1 style="text-align: center; ">Cabaña para 2 pasajeros</h1>
                <p style="text-align: center; ">La cabaña de 65 mts2 de una sola planta cuenta con cocina completamente equipada, baño completo, comedor, living con hogar a leña y TV. Además, posee una habitación matrimonial con cama Queen, TV, amplio placard, calefacción por radiadores, ropa blanca y servicio diario de mucama.</p>
            </div>
        </div>
        <div class="apart__section">
            <div class="apart__section-div">
                <h1 style="text-align: center; ">Cabaña para 3/6 pasajeros</h1>
                <p style="text-align: center; ">La cabaña de 75 mts2 distribuída en dos plantas cuenta con cocina completamente equipada, comedor, living con hogar a leña y TV por cable. Además posee baño completo en planta alta y toilette en planta baja. Dos habitaciones, una matrimonial con TV y otra con cuatro camas individuales. La cabaña posee calefacción por radiadores, ropa blanca y servicio diario de mucama.</p>
            </div>
        </div>
		<div class="section_cabañas-content">
			<img src="https://sitios.interwa.com/s/s3/fotos/sitio-nuevo-3-1588599013.jpg" alt="" id="IMG_9" />
		</div>
    </section>`;
    div.innerHTML = views;

    return div;
}
const contacto = () => {
    const div = document.createElement('div')
    const views = `<h1 class="contacto_title">Consultas</h1>
        <section class="contacto" style="display:none;">
        <div>
            <form method="post" action="https://sitios.interwa.com/tools/envia_correo.php">
                <label for="name1">Nombre: </label><input id="name1" type="text">
                <label for="lastName1">Apellido: </label><input id="lastName1" type="text">
                <label for="email1">Email: </label><input id="email1" type="email">
                <label for="number1">Telefono: </label><input id="numbre1" type="number">
                <label for="textArea1">Ingrese su consulta: </label><textarea name="" id="textArea1" cols="30" rows="10"></textarea>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
        <div class="contacto__data" style="margin-top: 40px;">
            <h2>
                Cabañas Alumine
            </h2>
            <p>
                San Martín 140, San Martín de los Andes, Patagonia Argentina<br/>Tel. +54 2972 0123456789
                <a href="mailto:demo@sitio.com"><br/><strong>demo@sitio.com</strong></a>
            </p>
        </div>
    </section>`
    div.innerHTML = views;
    return div;
}
const dondeEstamos = () => {
    const div = document.createElement('div')
    const views = `<section class="apart__section">
        <div class="apart__section-div">
        <h1 style="text-align: center; ">Ubicación de las cabañas</h1>
        <p style="text-align: center; ">Ubicado en pleno centro de la ciudad de San Martín de los Andes, a solo 8 cuadras de lago Lacar. En las inmediaciones del apart podrá encontrar todo lo que necesite, supermercado, farmacias, banco con cajero automatico, para que su estadía sea cómoda y placentera.</p>
        <p style="text-align: center; ">Ubicado en pleno centro de la ciudad y rodeado por amplios y hermosos jardines el complejo <strong>Apart y Cabañas del Bosque</strong> se destaca por ser un oasis de naturaleza, buen gusto y calidad en la provincia del Neuquén.
            El <strong>Lago Lacar,</strong> la Ruta de los 7 Lagos y parte de la Ruta 40, camino que lleva al centro de <strong>Ski Chapelco</strong>, son algunos de los paseos turísticos cercanos a nuestro complejo.</p></div>
        <div class="mapouter row">
        <div " class="gmap_canvas col-md-12 col-lg-8"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=650&amp;height=400&amp;hl=en&amp;q=san Martin de los andes, argentina&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.fnfgo.com/">FNF Online</a></div>
        <style>
            .mapouter {
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
        </style></div></div></section>`;
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
        </div></div>
        </section>
        <script>
        </script>`;
    div.innerHTML = views;
    return div;
}
const noMatch = () => {
    const div = document.createElement('div')
    const views = "<h2>404</h2>";
    div.innerHTML = views;
    return div;
}
const Home = `
<div class="opa">
<h1 class="text_home" id="medio">BIENVENIDOS</h1>
<div class="mage">
    <img src="./imgs/BM.png" class="move">
</div>
</div>
`;
const Quien = `
<div class="opa2">
<h1>Hola, me llamo<br><span class="text_home">Conrado Zafra Amorós</span></h1>
<img src="./imgs/laughman.gif" class="foto">
<p class="texto">Como ves, esta es mi página personal, mi currículum.</p>
<p class="texto">Explora a tu gusto por la página, pues hay una serie de easter eggs escondidos por ella.<br>También te habrás dado cuenta de que tengo predilección por todo aquello relacionado con Japón.<br>Además de eso, me caracterizo por ser una persona adaptable, organizada y que aprende rápido.</p>
<p class="texto">De hecho, esta página está en construcción y constante mejora según voy aprendiendo cosas nuevas.<br>Es una especie de Portfolio-Playground.</p>
</div>
`;
const Habilidades = `
<main class="opa2">
<h1>Software</h1>
<div class="hab">
<div class="hab2">
<img src="./imgs/AI.png" class="iconos">
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-info transi" id="nueve"></div>
</div>
</div>
<div class="hab2">
<img src="./imgs/PS.png" class="iconos">
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-info transi" id="ocho"></div>
</div>
</div>
<div class="hab2">
<img src="./imgs/ID.png" class="iconos">
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-info transi" id="siete"></div>
</div>
</div>
<div class="hab2">
<img src="./imgs/HTML5.png" class="iconos">
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-info transi" id="seis"></div>
</div>
</div>
<div class="hab2">
<img src="./imgs/css.png" class="iconos">
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-info transi" id="cinco"></div>
</div>
</div>
<div class="hab2">
<img src="./imgs/Git.png" class="iconos">
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-info transi" id="dos"></div>
</div>
</div>
<div class="hab2">
<img src="./imgs/c.png" class="iconos">
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-info transi" id="uno"></div>
</div>
</div>
<div class="hab2">
<img src="./imgs/vb.png" class="iconos">
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-info transi" id="uno"></div>
</div>
</div>
</div>
</main>
`;
const Titulos = `
<div class="opa">
<h1>Titulos Académicos</h1>
<ul class="texto">
    <li>Bootcamp programador Full-Stack. (450 horas)</li><br>
    <li>Creación, programación y Diseño de Páginas Web. (60 horas)</li><br>
    <li>Máster en Diseño Gráfico. (400 horas)</li><br>
    <li>Certificado de Profesionalidad en Impresión Digital, Nivel 2. (400 horas)</li><br>
</ul>
</div>
`;
const Experiencia = `
<div class="opa">
<h1>Experiencia Laboral</h1>
<ul class="texto" style="list-style-type:square;">
    <li>Diseñador Gráfico, Arte-finalizador.</li><br>
    <li>Vendedor y responsable de tienda.</li><br>
    <li>Monitor de Ajedrez.</li><br>
    <li>Terapeuta Autónomo.</li><br>
    <li>Guía del Museo Nacional de Ciencias Naturales de Madrid.</li><br>
    <li>Técnico Paleontólogo en Excavación.</li><br>
    <li>Profesor de Instituto.</li><br>
    <li>Ayudante del conservador de la colección de vertebrados del MNCN-Madrid.</li><br>
</ul>
</div>
`;
const Contacto = `
<div class="opa2">
    <h1>Contacta conmigo</h1>
    <p class="texto center">¿Interesado en contratar mis servicios?<br>¿Tienes alguna duda?<br>¡No temas!
            <br><br>Contacta conmigo a través de este formulario:</p>
        <br>
        <hr><br><br>
    <div class="flex">
            <form action="#" method="post" id="fondo">
                <label for="name_id">Nombre:</label>
                <br>
                <input type="text" name="name" id="name_id" size="30" required>
                <br>
                <label for="mail_id">Correo Electrónico:</label><br>
                <input type="email" name="mail" id="mail_id" size="30" required>
                <br>
                <label for="about_id">Asunto:</label><br>
                <input type="text" id="about_id" size="30">
                <br>
                <label for="text_id">Mensaje:</label><br>
                <textarea id="text_id" rows="6" cols="29" placeholder="De momento esto es un trucho."></textarea>
                <br><br>
                <input type="submit" class="nav-btn" onclick="event.preventDefault()" value="Enviar">
            </form>
            <form action="#" method="post" id="fondo">
                <p>Para que pueda conocerte mejor, te agradecería que me mandaras también los siguientes datos:</p>
                <br>
                <p>Género:</p>
                <input type="radio" id="male" name="gender" value="male">
                <label for="male">Hombre</label><br>
                <input type="radio" id="female" name="gender" value="female">
                <label for="female">Mujer</label><br>
                <input type="radio" id="other" name="gender" value="other">
                <label for="other">Otro</label><br>
                <label for="fun_id">¿Cuál?</label>
                <input type="text" id="fun_id" placeholder="HEMBRA ibérica" disabled>
                <br><br>
                <input type="submit" class="nav-btn" onclick="event.preventDefault()" value="Enviar">
            </form>
    </div>
</div>
`;
/*Botón de "otro" activa el campo de "cuál?"*/
const addFocusListenerToOther = () => {
        const otherInput = document.querySelector("#fun_id");
        otherInput.removeAttribute('disabled')
        const disableOther = () => otherInput.setAttribute('disabled', true)
        document.getElementById('female').addEventListener('focus', disableOther)
        document.getElementById('male').addEventListener('focus', disableOther)
    }
    /*Injección de contenido según se pulsen los botones*/
const main = document.querySelector('main')
window.addEventListener('load', () => {
    if (window.location.hash === '#quien') {
        main.innerHTML = Quien
    } else if (window.location.hash === '#titles') {
        main.innerHTML = Titulos
    } else if (window.location.hash === '#skills') {
        main.innerHTML = Habilidades
    } else if (window.location.hash === '#experience') {
        main.innerHTML = Experiencia
    } else if (window.location.hash === '#contact') {
        main.innerHTML = Contacto
        document.querySelector("#other").addEventListener("focus", addFocusListenerToOther)
    } else {
        main.innerHTML = Home
        document.querySelector(".move").addEventListener('click', () => {
            document.getElementById('audio1').play();
        })
    }
})

document.querySelector("#homebtn").addEventListener('click', () => {
    main.innerHTML = Home;
    history.pushState({}, '', '#');
    document.querySelector(".move").addEventListener('click', () => {
        document.getElementById('audio1').play();
    })
})
document.querySelector("#skills").addEventListener('click', () => {
    main.innerHTML = Habilidades;
    history.pushState({}, '', '#skills');
})
document.querySelector("#whobtn").addEventListener('click', () => {
    main.innerHTML = Quien;
    history.pushState({}, '', '#quien');
})
document.querySelector("#titlesbtn").addEventListener('click', () => {
    main.innerHTML = Titulos;
    history.pushState({}, '', '#titles');
})
document.querySelector("#expbtn").addEventListener('click', () => {
    main.innerHTML = Experiencia;
    history.pushState({}, '', '#experience');
})
document.querySelector("#contacbtn").addEventListener('click', () => {
    main.innerHTML = Contacto;
    document.querySelector("#other").addEventListener("focus", addFocusListenerToOther)
    history.pushState({}, '', '#contact');
})

/*onda en el puntero*/
window.addEventListener('load', () => {
    document.onmousemove = (e) => {
        document.getElementById("onda").style.left = (e.pageX - 18) + "px";
        document.getElementById("onda").style.top = (e.pageY - 18) + "px";
    }
});

var contador = 0;
var target = Math.round((Math.random() * 5) + 1);
window.addEventListener("click", () => {
    contador++;
    if (contador === target) {
        contador = 0;
        target = Math.round((Math.random() * 5) + 1);
        document.getElementById('onda').style.visibility = "visible";
        setTimeout(() => { document.getElementById('onda').style.visibility = "hidden" }, 1500);
    }
})
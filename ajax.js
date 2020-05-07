
function registro() {
    var peticion = null;

    peticion = new XMLHttpRequest();
    console.log(peticion);
    if (peticion) {
        peticion.open('get', "registro.html", false); //metodo , el archivo que voy a traer , si lo quiero sincrono = falso
        peticion.send(null);
        document.getElementById("contenedor").innerHTML = peticion.responseText;

    }
}
function producto_1() {
    var peticion = null;

    peticion = new XMLHttpRequest();
    console.log(peticion);
    if (peticion) {
        peticion.open('get', "producto_1.html", false); //metodo , el archivo que voy a traer , si lo quiero sincrono = falso
        peticion.send(null);
        document.getElementById("contenedor_menor").innerHTML = peticion.responseText;

    }
}
function producto_2() {
    var peticion = null;

    peticion = new XMLHttpRequest();
    console.log(peticion);
    if (peticion) {
        peticion.open('get', "producto_2.html", false); //metodo , el archivo que voy a traer , si lo quiero sincrono = falso
        peticion.send(null);
        document.getElementById("contenedor_menor").innerHTML = peticion.responseText;

    }
}

function producto_3() {
    var peticion = null;

    peticion = new XMLHttpRequest();
    console.log(peticion);
    if (peticion) {
        peticion.open('get', "producto_3.html", false); //metodo , el archivo que voy a traer , si lo quiero sincrono = falso
        peticion.send(null);
        document.getElementById("contenedor_menor").innerHTML = peticion.responseText;

    }
}


function contacto() {

    var peticion = null;

    peticion = new XMLHttpRequest();
    console.log(peticion);
    if (peticion) {
        peticion.open('get', "contacto.html", false); //metodo , el archivo que voy a traer , si lo quiero sincrono = falso
        peticion.send(null);
        document.getElementById("contenedor").innerHTML = peticion.responseText;

    }
    
}
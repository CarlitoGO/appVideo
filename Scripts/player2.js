$(document).ready(function () {
    getVideo();
})


function getVideo() {
    $.getJSON("Scripts/peliculas.json", function (mjson) {
        reproductor = mjson;
        cambio(reproductor);
        console.log(reproductor);
    });
}
function playVideo(id) {
    var player = videojs('fm-video', {
        fluid: true
    });
    player.src(reproductor.Accion[id].url)
    player.load();
    player.play();

}

function getGET() {
    // capturamos la url
    var loc = document.location.href;
    // si existe el interrogante
    if (loc.indexOf('?') > 0) {
        // cogemos la parte de la url que hay despues del interrogante
        var getString = loc.split('?')[1];
        // obtenemos un array con cada clave=valor
        var GET = getString.split('&');
        var get = {};

        // recorremos todo el array de valores
        for (var i = 0, l = GET.length; i < l; i++) {
            var tmp = GET[i].split('=');
            get[tmp[0]] = unescape(decodeURI(tmp[1]));
        }
        return get;
    }
}
function cambio(reproductor) {
    // Cogemos los valores pasados por get
    var valores = getGET();
    for (var index in valores) {
        comparar(reproductor, valores[index]);
    }


}

function comparar(reproductor, id) {
    $.each(reproductor.Accion, function (i, Accion) {
        if (Accion.id === id) {
            playVideo(id);
        }
    });
}
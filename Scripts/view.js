$(document).ready(function () {
    getVideo();
    full();
})
var reproductor;


function getVideo() {
    $.getJSON("Scripts/peliculas.json", function (mjson) {
        reproductor = mjson;
        cambio(reproductor);
        console.log(reproductor);
    });
}


function view(id) {
    $('#imagen_box').append('<img class="foto" src="' + reproductor.Accion[id].icono + '" alt="Alternate Text" />')
    $('#nombre').append('<div><h1 class="hh">' + reproductor.Accion[id].title + '</h1>\
        <div class="parrafo" ><h1 >' + reproductor.Accion[id].desd + '</h1></div>\
        </div > ')
    $('#este').append('<a href="player2.html?id=' + reproductor.Accion[id].id + '" class="btn btn-success" id="PLAY"> <i class="fas fa-play"></i>  PLAY NOW</a>')
    $('#este').append('<a href="' + reproductor.Accion[id].thrailer + '" class="btn btn-success" id="TRAILER"> <i class="fas fa-forward"></i>  VER TRAILER</a>')
       
}
function playVideo(id) {

   
    view(id);

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

function full() {
    $('#completa2').click(function () {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    });
}

//function next() {
//    $('#PLAY').click(function (e) {
//        if (elem.requestFullscreen) {
//            e.preventDefault();
//            $('.vjs-play-control').click();
//            $('.vjs-fullscreen-control').click();
//            player.play();
//        } else {
//            player.paused();
//        }
//        $('body').keydown(function (e) {
//            if (e.which == 27) {
//                player.pause();
//            }

//        });

       
//    });

//    $('#TRAILER').click(function (e) {
        
//    });
//}



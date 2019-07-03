$(document).ready(function () {
    full();
    getVideo();
    categoria();
    buscar();
    tengo();
});

var video;
var reproductor;
var elem = document.getElementById("-video");
const formulario = document.querySelector('#formulario')

function getVideo() {
    $.getJSON("Scripts/tv.json", function (mjson) {
        reproductor = mjson;
        genList(reproductor);
    });
}


function playvideo(id) {
    var video = document.getElementById('-video');
    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(reproductor.Stream[id].link);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.load();
            video.play();
        });
    }
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = reproductor.Stream[id].link;
        video.addEventListener('loadedmetadata', function () {
       

        });
        video.play();
    }
}


function genList(reproductor) {
    for (var i = 0; i <= reproductor.Stream.length - 1; i++) {
        $('#playlist').append('<li class="list-group-item" id="' + i + '"><i>' + reproductor.Stream[i].number + '</i><img src="' + reproductor.Stream[i].image + '" class="imagen" alt="X">' + reproductor.Stream[i].title + '</li>')
    }
  
    $('#playlist li').click(function () {
        var selectedvideo = $(this).attr('id');
        $('#vista h6').remove();
        $('#vista').append('<h6 class="list-group-item" id="' + selectedvideo + '"><i>' + reproductor.Stream[selectedvideo].number + '</i><img src="' + reproductor.Stream[selectedvideo].image + '" class="imagen" alt="X">' + reproductor.Stream[selectedvideo].title + '</h6>')
        $('#next').click(function () {
            var suma = selectedvideo++;
            $('#vista h6').remove();
            $('#vista').append('<h6 class="list-group-item" id="' + suma + '"><i>' + reproductor.Stream[suma].number + '</i><img src="' + reproductor.Stream[suma].image + '" class="imagen" alt="X">' + reproductor.Stream[suma].title + '</h6>')
            playvideo(suma);

        });
        $('#previous').click(function () {
            var resta = selectedvideo--;
            $('#vista h6').remove();
            $('#vista').append('<h6 class="list-group-item" id="' + resta + '"><i>' + reproductor.Stream[resta].number + '</i><img src="' + reproductor.Stream[resta].image + '" class="imagen" alt="X">' + reproductor.Stream[resta].title + '</h6>')
            playvideo(resta);

        });
        playvideo(selectedvideo);
    });

    $('#logo').click(function () {
        document.getElementById('sidebar').classList.toggle('active');
    });

    playvideo(0);
} 

function full() {
    $('#completa').click(function () {
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


//var goFS = document.getElementById("completa");
//goFS.addEventListener("click", function () {
//    var container = document.getElementById("video_player_box");
//    container.requestFullscreen();
//}, false);

function categoria() {
    $('#CatList li').click(function () {
        var selectedvideo = $(this).attr('id');
        filtro(selectedvideo);
        document.getElementById('sidebar').classList.toggle('active');
    });
}

function filtro(selectedvideo) {
        $.getJSON("Scripts/tv.json", function (mjson) {
            reproductor = mjson;
        });
    var find = selectedvideo;
    $('#playlist li').remove();
    if (find === "ALL") {
        for (var i = 0; i <= reproductor.Stream.length - 1; i++) {
            $('#playlist').append('<li class="list-group-item" id="' + i + '"><i>' + reproductor.Stream[i].number + '</i><img src="' + reproductor.Stream[i].image + '" class="imagen" alt="logo de Potres carlos">' + reproductor.Stream[i].title + '</li>')
        }
    } else {
        for (var i = 0; i <= reproductor.Stream.length - 1; i++) {
            if (reproductor.Stream[i].category.toLowerCase().indexOf(find.toLowerCase()) != -1) {
                $('#playlist').append('<li class="list-group-item" id="' + i + '"><i>' + reproductor.Stream[i].number + '</i><img src="' + reproductor.Stream[i].image + '" class="imagen" alt="logo de Potres carlos">' + reproductor.Stream[i].title + '</li>')
            }
        }
    }
        
        $('#playlist li').click(function () {
            console.log("");
            var selectedvideo = $(this).attr('id');
            $('#vista h6').remove();
            $('#vista').append('<h6 class="list-group-item" id="' + selectedvideo + '"><i>' + reproductor.Stream[selectedvideo].number + '</i><img src="' + reproductor.Stream[selectedvideo].image + '" class="imagen" alt="X">' + reproductor.Stream[selectedvideo].title + '</h6>')
            playvideo(selectedvideo);
        });

    //$('#formulario').keyup(function () {
    //    $('#playlist li').remove();
    //    var texto = formulario.value.toLowerCase();
    //    //const nombre = reproductor.Stream[i].category.value.toLowerCase();
    //    for (var i = reproductor.Stream.length - 1; i >= 0; i--) {
    //        var nombre = reproductor.Stream[i].title;
    //         if(nombre.indexOf(texto)!=1) {
    //            $('#playlist').append('<li class="list-group-item" id="' + i + '"><img src="' + reproductor.Stream[i].image + '" class="imagen" alt="logo de Potres carlos">' + reproductor.Stream[i].title + '</li>')
    //        }
    //    }
    //});

}

function buscar() {
    $('#btnfind').click(function () {
        document.getElementById('formulario').classList.toggle('find');
        if (formulario.value == "") {
            formulario.focus();
        }
        else {
            formulario.blur();
        }
        formulario.value = "";
    });
}

function tengo() {
    $.getJSON("Scripts/tv.json", function (mjson) {
        reproductor = mjson;
    });
    $('#formulario').keyup(function () {
        $('#playlist li').remove();
        var texto = formulario.value.toLowerCase();
        //var nombre = reproductor.Stream[i].title.value.toLowerCase();
        for (var i = 0; i <= reproductor.Stream.length - 1; i++) {
            var nombre = reproductor.Stream[i].title.toLowerCase();
            if (nombre.indexOf(texto) != -1) {
                $('#playlist').append('<li class="list-group-item" id="' + i + '"><i>' + reproductor.Stream[i].number + '</i><img src="' + reproductor.Stream[i].image + '" class="imagen" alt="logo de Potres carlos">' + reproductor.Stream[i].title + '</li>')
            }
        }
        $('#playlist li').click(function () {
            var selectedvideo = $(this).attr('id');
             $('#vista h6').remove();
        $('#vista').append('<h6 class="list-group-item" id="' + selectedvideo + '"><i>' + reproductor.Stream[selectedvideo].number + '</i><img src="' + reproductor.Stream[selectedvideo].image + '" class="imagen" alt="X">' + reproductor.Stream[selectedvideo].title + '</h6>')
            $('#next').click(function () {
                var suma = selectedvideo++;
                $('#vista h6').remove();
                $('#vista').append('<h6 class="list-group-item" id="' + suma + '"><i>' + reproductor.Stream[suma].number + '</i><img src="' + reproductor.Stream[suma].image + '" class="imagen" alt="X">' + reproductor.Stream[suma].title + '</h6>')
                playvideo(suma);

            });
            $('#previous').click(function () {
                var resta = selectedvideo--;
                $('#vista h6').remove();
                $('#vista').append('<h6 class="list-group-item" id="' + resta + '"><i>' + reproductor.Stream[resta].number + '</i><img src="' + reproductor.Stream[resta].image + '" class="imagen" alt="X">' + reproductor.Stream[resta].title + '</h6>')
                playvideo(resta);

            });
            playvideo(selectedvideo);
        });
    });

    var bPreguntar = true;

    window.onbeforeunload = preguntarAntesDeSalir;

    function preguntarAntesDeSalir() {
        var respuesta;

        if (bPreguntar) {
            respuesta = confirm('¿Seguro que quieres salir?');

            if (respuesta) {
                window.onunload = function () {
                    return true;
                }
            } else {
                return false;
            }
        }
    }

    function networkInfo() {

        var wmi = new ActiveXObject("WbemScripting.SWbemLocator");
        var service = wmi.ConnectServer(".");


        e = new Enumerator(service.ExecQuery("SELECT * FROM Win32_NetworkAdapterConfiguration WHERE IPEnabled = True"));


        for (; !e.atEnd(); e.moveNext()) {
            var s = e.item();
            var macAddress = unescape(s.MACAddress);

        }

        return macAddress;
    }
    console.log(networkInfo());
}


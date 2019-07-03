$(document).ready(function () {
    full();
    getVideo();
    next();
    posicionate();
});

var video;
var reproductor;
var elem = document.getElementById('fm-video');

function getVideo() {
    $.getJSON("Scripts/peliculas.json", function (mjson) {
        reproductor = mjson;
        genList(reproductor);
    });
}

function playVideo(id) {
    var player = videojs(' ', {
        controls: true,
        sources: [{ src: reproductor.Accion[id].url, type: 'video/mp4' }],
    });

    player.load();
    player.src(reproductor.Accion[id].url);
    player.play();

}


    function genList(reproductor) {
        for (var i = reproductor.Accion.length - 1; i >= 0; i--) {
            $('#playlist').append('\
                <a href="video.html?id=' + reproductor.Accion[i].id + '"> \
                  <div class="content"> \
                  <div class="item-media"> \
                    <img src="'+ reproductor.Accion[i].icono + '", style=" \
                     height: 200px; \
                     width: 150PX; \
                     border-radius: 5px; \
                     float: left; \
                      "> \
                  </div> \
                <div class="labe">\
                    <h3>'+ reproductor.Accion[i].title + '</h3>\
                <h4>'+ reproductor.Accion[i].ano + '</h4>\
                </div >\
                  </div> \
                </a> \
                </li>')
            if (reproductor.Accion[i].categoria.toLowerCase().indexOf("Accion".toLowerCase()) != -1) {
                $('#Accion').append(' \
                <a href="video.html?id=' + reproductor.Accion[i].id + '"> \
                  <div class="content"> \
                  <div class="item-media"> \
                    <img src="'+ reproductor.Accion[i].icono + '", style=" \
                     height: 200px; \
                     width: 150PX; \
                     border-radius: 5px; \
                     float: left; \
                      "> \
                  </div> \
                <div class="labe">\
                    <h3>'+ reproductor.Accion[i].title + '</h3>\
                <h4>'+ reproductor.Accion[i].ano + '</h4>\
                </div >\
                  </div> \
                </a> \
                </li>')

            }

            if (reproductor.Accion[i].categoria.toLowerCase().indexOf("Romance".toLowerCase()) != -1) {
                $('#Romance').append(' \
               <a href="video.html?id=' + reproductor.Accion[i].id + '"> \
                  <div class="content"> \
                  <div class="item-media"> \
                    <img src="'+ reproductor.Accion[i].icono + '", style=" \
                     height: 200px; \
                     width: 150PX; \
                     border-radius: 5px; \
                     float: left; \
                      "> \
                  </div> \
                <div class="labe">\
                    <h3>'+ reproductor.Accion[i].title + '</h3>\
                <h4>'+ reproductor.Accion[i].ano + '</h4>\
                </div >\
                  </div> \
                </a> \
                </li>')
            }

             if (reproductor.Accion[i].categoria.toLowerCase().indexOf("Drama".toLowerCase()) != -1) {
                $('#Drama').append(' \
                <a href="video.html?id=' + reproductor.Accion[i].id + '"> \
                  <div class="content"> \
                  <div class="item-media"> \
                    <img src="'+ reproductor.Accion[i].icono + '", style=" \
                     height: 200px; \
                     width: 150PX; \
                     border-radius: 5px; \
                     float: left; \
                      "> \
                  </div> \
                <div class="labe">\
                    <h3>'+ reproductor.Accion[i].title + '</h3>\
                <h4>'+ reproductor.Accion[i].ano + '</h4>\
                </div >\
                  </div> \
                </a> \
                </li>')

            }

             if (reproductor.Accion[i].categoria.toLowerCase().indexOf("Comedia".toLowerCase()) != -1) {
                $('#Comedia').append('\
                <a href="video.html?id=' + reproductor.Accion[i].id + '"> \
                  <div class="content"> \
                  <div class="item-media"> \
                    <img src="'+ reproductor.Accion[i].icono + '", style=" \
                     height: 200px; \
                     width: 150PX; \
                     border-radius: 5px; \
                     float: left; \
                      "> \
                  </div> \
                <div class="labe">\
                    <h3>'+ reproductor.Accion[i].title + '</h3>\
                <h4>'+ reproductor.Accion[i].ano + '</h4>\
                </div >\
                  </div> \
                </a> \
                </li>')

            }

             if (reproductor.Accion[i].categoria.toLowerCase().indexOf("Terror".toLowerCase()) != -1) {
                $('#Terror').append(' \
                <a href="video.html?id=' + reproductor.Accion[i].id + '"> \
                  <div class="content"> \
                  <div class="item-media"> \
                    <img src="'+ reproductor.Accion[i].icono + '", style=" \
                     height: 200px; \
                     width: 150PX; \
                     border-radius: 5px; \
                     float: left; \
                      "> \
                  </div> \
                <div class="labe">\
                    <h3>'+ reproductor.Accion[i].title + '</h3>\
                <h4>'+ reproductor.Accion[i].ano + '</h4>\
                </div >\
                  </div> \
                </a> \
                </li>')
            }
            
             if (reproductor.Accion[i].categoria.toLowerCase().indexOf("suspenso".toLowerCase()) != -1) {
                $('#Suspenso').append(' \
                 <a href="video.html?id=' + reproductor.Accion[i].id + '"> \
                  <div class="content"> \
                  <div class="item-media"> \
                    <img src="'+ reproductor.Accion[i].icono + '", style=" \
                     height: 200px; \
                     width: 150PX; \
                     border-radius: 5px; \
                     float: left; \
                      "> \
                  </div> \
                <div class="labe">\
                    <h3>'+ reproductor.Accion[i].title + '</h3>\
                <h4>'+ reproductor.Accion[i].ano + '</h4>\
                </div >\
                  </div> \
                </a> \
                </li>')
            }

             if (reproductor.Accion[i].categoria.toLowerCase().indexOf("Superheroes".toLowerCase()) != -1) {
                $('#Superheroes').append(' \
                <a href="video.html?id=' + reproductor.Accion[i].id + '"> \
                  <div class="content"> \
                  <div class="item-media"> \
                    <img src="'+ reproductor.Accion[i].icono + '", style=" \
                     height: 200px; \
                     width: 150PX; \
                     border-radius: 5px; \
                     float: left; \
                      "> \
                  </div> \
                <div class="labe">\
                    <h3>'+ reproductor.Accion[i].title + '</h3>\
                <h4>'+ reproductor.Accion[i].ano + '</h4>\
                </div >\
                  </div> \
                </a> \
                </li>')
            }

             if (reproductor.Accion[i].categoria.toLowerCase().indexOf("infantil".toLowerCase()) != -1) {
                $('#Infantil').append('\
                 <a href="video.html?id=' + reproductor.Accion[i].id + '"> \
                  <div class="content"> \
                  <div class="item-media"> \
                    <img src="'+ reproductor.Accion[i].icono + '", style=" \
                     height: 200px; \
                     width: 150PX; \
                     border-radius: 5px; \
                     float: left; \
                      "> \
                  </div> \
                <div class="labe">\
                    <h3>'+ reproductor.Accion[i].title + '</h3>\
                <h4>'+ reproductor.Accion[i].ano + '</h4>\
                </div >\
                  </div> \
                </a> \
                </li>')
            }


        }

        $('#playlist li').click(function () {
           
            var selectedvideo = $(this).attr('id');
            playvideo(selectedvideo);
        });

        $('#Accion li').click(function () {
            console.log("hola");
            var selectedvideo = $(this).attr('id');
            playvideo(selectedvideo);
        });

        $('#Romance li').click(function () {
            console.log("hola");
            var selectedvideo = $(this).attr('id');
            playvideo(selectedvideo);
        });

        $('#Drama li').click(function () {
            console.log("hola");
            var selectedvideo = $(this).attr('id');
            playvideo(selectedvideo);
        });

        $('#Comedia li').click(function () {
            console.log("hola");
            var selectedvideo = $(this).attr('id');
            playvideo(selectedvideo);
        });

        $('#Terror li').click(function () {
            console.log("hola");
            var selectedvideo = $(this).attr('id');
            playvideo(selectedvideo);
        });

        $('#Suspenso li').click(function () {
            console.log("hola");
            var selectedvideo = $(this).attr('id');
            playvideo(selectedvideo);
        });

        $('#Marvel li').click(function () {
            console.log("hola");
            var selectedvideo = $(this).attr('id');
            playvideo(selectedvideo);
        });

        $('#Infantil a').click(function () {
            saveCoords();
            console.log("hola");
        });
    }

function List(reproductor) {
    for (var i = reproductor.Accion.length - 1; i >= 0; i--) {

        if (true) {

        }
    }

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

function next() {
    $('#next2').click(function () {
        var time = elem.currentTime;
        elem.currentTime = time + 1;
    });

    $('#back').click(function () {
        document.getElementById('sideban').classList.toggle('active');
        var player = videojs('fm-video');
        player.pause();
    });
}


function saveCoords() {
    localStorage.setItem("coords", JSON.stringify({
        y: window.scrollY,
        x: window.scrollX
    }));
    console.log(window.scrollY);
}

function posicionate() {
    var coords = JSON.parse(localStorage.getItem("coords"));
    if (coords) {
        
    }
}



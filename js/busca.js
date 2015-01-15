var mapCanvas, mapOptions, map;

// Função para inicialização do mapa
function initialize() {
    mapCanvas = document.getElementById('map-canvas');
    mapOptions = {
        center: new google.maps.LatLng(-5.80, -35.219421),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(mapCanvas, mapOptions);
}

// Requisição para recuperar ocorrências do usuário

//...


// Requisição para que o usuário saia do sistema

// ...
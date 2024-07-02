function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };
    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.915342377186214, lng:-49.0846617742332 , titulo: 'Desfile OktoberFest', descricao: 'Festa típica alemã, comemorada em Blumenau' },
        { lat:-26.91537107713005,  lng:-49.0846617742332 , titulo: 'Desfile Magia de Natal', descricao: 'Desfile feito todos os anos no centro de blumenau' },
        { lat:-26.9137455072812, lng: -49.06904064354716 , titulo: 'Prefeitura Municipal de Blumenau ', descricao: ' lugar onde ficam os orgãos importantes para a cidade '},
    ];
    // Criação do mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: blumenau
    });
    // Adicionando marcadores no mapa
    locaisEventos.forEach(function(evento) {
        var marker = new google.maps.Marker({
            position: { lat: evento.lat, lng: evento.lng },
            map: map,
            title: evento.titulo
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<h5>' + evento.titulo + '</h5><p>' + evento.descricao + '</p>'
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    });
}
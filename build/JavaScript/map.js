function loadMap(logradouro, cidade) {

    var platform = setApiKey('aE2IlRuV5Kh_h2WFoMJ9D2BxS_i4BjgJJvm81ELmX5o')
    var defaultLayers = platform.createDefaultLayers();
    var map = instaceMap(defaultLayers);
    var geocodingParams = parametersGeocoding(logradouro, cidade);
    var onResult = returnResultSuccessGeocoding(map)
    var geocoder = platform.getGeocodingService();
    returnResultErrorGeocoding(geocodingParams, onResult, geocoder);
    createUiDefault(map, defaultLayers);
}
function setApiKey(apiKey) {
    return platform = new H.service.Platform({
        'apikey': apiKey
    });
}
function instaceMap(defaultLayers) {
    return map = new H.Map(
        document.getElementById('boxMap'),
        defaultLayers.vector.normal.map,
        {
            zoom: 18,
            center: { lat: 52.5, lng: 13.4 }
        });
}
function parametersGeocoding(logradouro, cidade) {
    return geocodingParams = {
        searchText: `${logradouro}, ${cidade}, Brazil`
    };
}
function returnResultSuccessGeocoding(map) {
    return onResult = function (result) {
        var locations = result.Response.View[0].Result,
            position,
            marker;
        // Add a marker for each location found
        foreachLocation(locations, map, marker, position);
    };
}
function returnResultErrorGeocoding(geocodingParams, onResult, geocoder) {
    geocoder.geocode(geocodingParams, onResult, function (e) {
        alert(e);
    });
}
function createUiDefault(map, defaultLayers) {
    return ui = H.ui.UI.createDefault(map, defaultLayers, 'pt-BR');
}

function foreachLocation(locations, map, marker, position) {
    for (i = 0; i < locations.length; i++) {
        position = {
            lat: locations[i].Location.DisplayPosition.Latitude,
            lng: locations[i].Location.DisplayPosition.Longitude
        };
        map.setCenter(position);
        marker = new H.map.Marker(position);
        map.addObject(marker);
    }
}
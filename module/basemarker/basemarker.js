define(function(){
    return function(){
        var myIcon = L.icon({
            iconUrl: 'img/5.10.png',
            iconSize: [30, 45],
            iconAnchor: [15, 45],
            popupAnchor: [0, -45]
        });
        $.getJSON('module/basemarker/basemarker.json', function(json){
            setMarker(json);
        })
        function setMarker(json){
            for(var i=0; i<json.length; i++){
                L.marker(json[i].latlng, {icon: myIcon}).bindPopup(json[i].popup).addTo(map);
            }
        }
    }
})
define(function(){
    return function(){
        var s = this;
        var osm, ggl, gglsats;


        this.init = function(){
            initmap();
            events();
            setMarker()
        };



       function initmap(){
            map = L.map('maped').setView([50.448, 30.53], 11);

            osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
            ggl =new L.TileLayer('http://mt0.googleapis.com/vt/lyrs=m@207000000&hl=ru&src=api&x={x}&y={y}&z={z}&s=Galile',{maxZoom: 18,minZoom:3});
            gglsats = new L.TileLayer('https://khms1.google.com/kh/v=142&src=app&x={x}&s=&y={y}&z={z}&s=Gali', {maxZoom:18, minZoom:3});
            map.addLayer(ggl);

            var baseLayers =  {'OSM':osm, 'Google':ggl, 'Google sat':gglsats  } ;
            var layerControl = L.control.layers(baseLayers); layerControl.addTo(map);
        };



        function setMarker(){
            require([
                'basemarker'
            ], function(js){
                new js();
            })

        }

        function events(){
            var popup = L.popup()

            document.onkeydown = function(e) {
                e = e || window.event;
                if (e.shiftKey) {
                    map.on('click', getLatLng )
                    map.on('mousemove', getLatLng);

                }
            }
            document.onkeyup = function(e) {
                e = e || window.event;
                if (e.keyCode == 16) {
                    map.off('mousemove', getLatLng);
                    map.off('click', getLatLng )
                    map.removeLayer(popup)
                }
            }

            function getLatLng(e){
                if(popup._isOpen){
                    popup.setLatLng(e.latlng).
                        setContent("   "+f(e.latlng.lat).toFixed(4)).
                        update();
                }else{
                    popup.setLatLng(e.latlng).
                        setContent("   "+f(e.latlng.lat).toFixed(4) + ": "+f(e.latlng.lng).toFixed(4)).
                        addTo(map);
                }
            }
        };
    }
})



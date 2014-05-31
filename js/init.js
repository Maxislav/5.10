var map;

var f = parseFloat;

requirejs.config({
    waitSeconds: 15,
    baseUrl: '',

    paths: {
        app: 'js/app',
        jquery: 'lib/jquery/jquery-1.11.1.min',
        leaflet: 'lib/leaflet/leaflet',
        basemarker: 'module/basemarker/basemarker'
    },

    shim:{
        app: {
            deps:[
                'jquery',
                'leaflet'
            ]
        }
    }
});

require([
"app"
], function(js){
    var app = new js();
    app.init();
})
var map;

var f = parseFloat;

requirejs.config({
    waitSeconds: 15,
    baseUrl: '',

    paths: {
        app: 'js/app',
        jquery: 'lib/jquery/jquery-1.11.1.min',
        leaflet: 'lib/leaflet/leaflet',
        basemarker: 'module/basemarker/basemarker',
        text: 'lib/requirejs/text',
        build: 'build/scripts.min',
        addpoint: 'module/addpoint/addpoint'
    },

    shim:{
        app: {
            deps:[
                'build'
               // 'leaflet'
            ]
        }
    }
});
var app;
require([
"app"
], function(js){
    app = new js();
    app.init();
})
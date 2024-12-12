var map = L.map('map', {
    center: [-12.18452995627939, -76.93208039645626],
    zoom: 13,
    minZoom: 12,
    maxZoom: 20,
    maxBounds: [[-12.164686429030885,-76.92048175472551], [-12.182222235649842, -76.93748760738512]]
});
var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var bgoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3'] });

bgoogleSat.addTo(map);

var curvas_nivel = L.tileLayer.wms("http://localhost:8080/geoserver/web_villa_maria_triunfo/wms?", {
    layers: "web_villa_maria_triunfo:cuevasfinalito", //gisweb:curvas de nivel
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
curvas_nivel.addTo(map);

var poli_triunfo = L.tileLayer.wms("http://localhost:8080/geoserver/web_villa_maria_triunfo/wms?", {
    layers: "web_villa_maria_triunfo:santa_triunfo", //gisweb:limite santa maria del triunfo
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
poli_triunfo.addTo(map);

var Colegios = L.tileLayer.wms("http://localhost:8080/geoserver/web_villa_maria_triunfo/wms?", {
    layers: "web_villa_maria_triunfo:colegio", //gisweb:colegios santa maria del triunfo
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Colegios.addTo(map);

var Iglesias = L.tileLayer.wms("http://localhost:8080/geoserver/web_villa_maria_triunfo/wms?", {
    layers: "web_villa_maria_triunfo:iglesias", //gisweb:Iglesias santa maria del triunfo
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Iglesias.addTo(map);     

var Hospital = L.tileLayer.wms("http://localhost:8080/geoserver/web_villa_maria_triunfo/wms?", {
    layers: "web_villa_maria_triunfo:hospital", //gisweb:Hospital santa maria del triunfo
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Hospital.addTo(map);  


var baseMaps = {
    "OSM": basemapOSM,
    "Google Satelite": bgoogleSat
};

var overlayMaps = {
    "curvas_nivel": curvas_nivel,
    "poli_triunfo":poli_triunfo,
    "Colegios":Colegios,
    "Iglesias":Iglesias,
    "Hospital":Hospital



};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);
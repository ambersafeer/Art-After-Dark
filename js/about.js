// JavaScript Document
var nbMap = L.map('map-div').setView([40.500584, -74.447318], 18);

var CartoDB_VoyagerLabelsUnder = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20,
	minZoom: 17
}).addTo(nbMap);

//var foodIcon = L.icon({
//iconUrl: 'utensils-solid.svg',
//iconSize: [25],
////iconAnchor: [15, 35], // point of the icon which will correspond to marker's location
////popupAnchor: [1, -30], // point from which the popup should open relative to the iconAnchor
////tooltipAnchor: [5, -30]
//});
//
//
//var marker0 = L.marker([40.501037, -74.446971],{icon: foodIcon}).addTo(nbMap);

var circle = L.circle([40.500584, -74.447318], {
    color: '#313F5D',
    fillColor: '#313F5D',
    fillOpacity: 0.5,
    radius: 10
}).addTo(nbMap); //announcements

var polygon1 = L.polygon([
    [40.501279, -74.448039],
    [40.501496,  -74.447612],
	[40.501295, -74.447466],
	[40.501227, -74.447685],
	[40.501247, -74.447701],
	[40.501222, -74.447756],
	[40.501192, -74.447741],
	[40.501119, -74.447935]
], {
	color: '#91AECF'
}).addTo(nbMap); //artworks

var polygon2 = L.polygon([
    [40.5011, -74.447919],
	[40.501263, -74.447442],
	[40.501074, -74.447392],
	[40.500961, -74.447706]
], {
	color:'#E4A951'
}).addTo(nbMap); //films

var polygon3 = L.polygon([
    [40.501443, -74.447479],
	[40.501469, -74.447418],
	[40.501274, -74.447249],
	[40.501241, -74.447345]
], {
	color: '#91AECF'
}).addTo(nbMap); //art workshop station


var polygon4 = L.polygon([
    [40.500595, -74.447585],
	[40.500451, -74.447489],
	[40.500378, -74.447756]
], {
    color: '#313F5D',
    fillColor: '#313F5D',
    fillOpacity: 0.5
}).addTo(nbMap); //live music

var polygon5 = L.polygon([
	[40.499614, -74.446324],
	[40.499718, -74.445951],
	[40.499655, -74.445881],
	[40.499552, -74.446284]
], {
    color: '#313F5D',
    fillColor: '#313F5D',
    fillOpacity: 0.5
}).addTo(nbMap); //sign in wristband

var polygon6 = L.polygon([
	[40.500361, -74.447309],
	[40.500519, -74.446915],
	[40.500047,  -74.446608],
	[40.500124, -74.447144]
], {
	color:'#E4A951'
}).addTo(nbMap); //illustration and mixed media



var polygon8 = L.polygon([
	[40.500047,  -74.446608],
	[40.49972, -74.446861],
	[40.499501, -74.446708],
	[40.499622, -74.446335]
	
], {
	color:'#E4A951'
}).addTo(nbMap); //illustration and mixed media

var polygon7 = L.polygon([
	[40.500124, -74.447144],
	[40.500047,  -74.446608],
	[40.49972, -74.446861]
], {
	color: '#91AECF'
}).addTo(nbMap); //workshop

var polygon9 = L.polygon([
	[40.500835, -74.447739],
	[40.50093, -74.447587],
	[40.500669, -74.447466],
	[40.50064, -74.447611]
], {
	color:'#E4A951'
}).addTo(nbMap); //digital

//circle.bindPopup("Competition Announcements <img src="map-gallery-resized/"");
//polygon1.bindPopup("Real-Time Modern Art");
//polygon2.bindPopup("Films");
//polygon3.bindPopup("Art Workshop Station");
//polygon4.bindPopup("Live Music");
//polygon5.bindPopup("Sign-In");
//polygon6.bindPopup("Illustrations");
//polygon7.bindPopup("Art Workshop Station");
//polygon8.bindPopup("Mixed Media");
//polygon9.bindPopup("Digital Art");

var popup0 = 'Competition Announcements <img src="map-gallery-resized/announcements.jpg">'

var popup1 = 'Real-Time Modern Art <img src="map-gallery-resized/real-time.jpg">'

var popup2 = 'Films <img src="map-gallery-resized/film.jpg">'

var popup3 = 'Art Workshop Station <img src="map-gallery-resized/workshop1.jpg">'

var popup4 = 'Live Music'

var popup5 = 'Sign In <img src="map-gallery-resized/entry.jpg">'

var popup6 = 'Illustrations <img src="map-gallery-resized/artworks.jpg">'

var popup7 = 'Art Workshop Station'

var popup8 = 'Mixed Media <img src="map-gallery-resized/artworks2.jpg">'

var popup9 = 'Digital Art <img src="map-gallery-resized/digital.jpg">'

var popupOptions = {minWidth:200}

circle.bindPopup(popup0,popupOptions);
polygon1.bindPopup(popup1,popupOptions);
polygon2.bindPopup(popup2,popupOptions);
polygon3.bindPopup(popup3,popupOptions);
polygon4.bindPopup(popup4,popupOptions);
polygon5.bindPopup(popup5,popupOptions);
polygon6.bindPopup(popup6,popupOptions);
polygon7.bindPopup(popup7,popupOptions);
polygon8.bindPopup(popup8,popupOptions);
polygon9.bindPopup(popup9,popupOptions);

//function onMapClick(e) {
//alert('You clicked the map at ' + e.latlng);
//}
//nbMap.on('click', onMapClick);
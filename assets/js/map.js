var map;

/// map 
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.390205, lng: 2.154007 }, 
    zoom: 12,
  });
}

//https://stackoverflow.com/questions/12652287/using-a-local-folder-how-to-store-google-markers
//icons for map: http://map-icons.com

var iconBase =
    "https://flisanp.github.io/ms2-barcelona-guide/assets/images/icons-map/"; 

  var icons = {
    eat: {
      icon: iconBase + "food.svg",  
    },
    sleep: {
      icon: iconBase + "lodging.svg",
    },
    discover: {
      icon: iconBase + "sights.svg",
    },
     shop: {
      icon: iconBase + "store.svg",
    },
  };


  //restaurant locations
  var eat = [
    {
      position: new google.maps.LatLng(41.39229, 2.17421), //Hawker 45
      type: "eat",
      information: "<div class='info-window'><h4>Hawker 45</h4>"+ 
      '<h5><i class="fa fa-map-marker"></i> Carrer de Casp, 45'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='http://hawker45.com/en/' target='blank'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.38198, 2.18383), //The Green Spot
      type: "eat",
      information: "<div class='info-window'><h4>The Green Spot</h4>"+ 
      '<h5><i class="fa fa-map-marker"></i> Carrer de la Reina Cristina, 12'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://www.encompaniadelobos.com/en/the-green-spot/' target='blank'> Visit website</a></h5></div>",
     },
    {
      position: new google.maps.LatLng(41.37591, 2.15682), //Tickets
      type: "eat",
      information: "<div class='info-window'><h4>Tickets</h4>"+ 
      '<h5><i class="fa fa-map-marker"></i> Av. del Paral·lel, 164'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://elbarri.com/en/restaurant/tickets/' target='blank'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.38952, 2.18171), //Picnic
      type: "eat",
      information: "<div class='info-window'><h4>Picnic</h4>"+ 
      '<h5><i class="fa fa-map-marker"></i> Carrer del Comerç, 1'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='http://www.picnic-restaurant.com' target='blank'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.37924, 2.17307), //Bar Cañete
      type: "eat",
      information: "<div class='info-window'><h4>Bar Cañete</h4>"+ 
      '<h5><i class="fa fa-map-marker"></i> Carrer de la Unió, 17'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://www.barcanete.com' target='blank'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.38164, 2.17204), //Direkte Boqueria
      type: "eat",
      information: "<div class='info-window'><h4>Direkte Boqueria</h4>"+ 
      '<h5><i class="fa fa-map-marker"></i> Carrer de les Cabres, 13'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='http://www.direkte.cat' target='blank'> Visit website</a></h5></div>",
    },
     {
      position: new google.maps.LatLng(41.384700053046565, 2.181695098818775), //El Xampanyet
      type: "eat",
      information: "<div class='info-window'><h4>El Xampanyet</h4>"+ 
      '<h5><i class="fa fa-map-marker"></i> Carrer de Montcada, 22'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://www.facebook.com/El-Xampanyet-1427201254238228/' target='blank'> Visit website</a></h5></div>",
    },
     {
      position: new google.maps.LatLng(41.38510245044985, 2.184462906972496), //Koku Kitchen Ramen & Gyoza Bar
      type: "eat",
      information: "<div class='info-window'><h4>Koku Kitchen Ramen & Gyoza Bar</h4>"+ 
      '<h5><i class="fa fa-map-marker"></i> Carrer del Comerç, 29'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://kokukitchen.es/' target='blank'> Visit website</a></h5></div>",
    },
     {
      position: new google.maps.LatLng(41.39255514750829, 2.1674576214895405), //Tapas 24
      type: "eat",
      information: "<div class='info-window'><h4>Tapas 24</h4>"+ 
      '<h5><i class="fa fa-map-marker"></i> Carrer de la Diputació, 269'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://www.carlesabellan.com/tapas24-diputacio/' target='blank'> Visit website</a></h5></div>",
    },
     {
      position: new google.maps.LatLng(41.37411213083554, 2.1655625478130056), //Quimet & Quimet 
      type: "eat",
      information: "<div class='info-window'><h4>Quimet & Quimet</h4>"+ 
      '<h5><i class="fa fa-map-marker"></i> Carrer del Poeta Cabanyes, 25'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://www.carlesabellan.com/tapas24-diputacio/'target='blank'> Visit website</a></h5></div>",
    },

    ];

    //hotel locations
    var sleep = [
    {  
      position: new google.maps.LatLng(41.36852779108305, 2.190012429899792), //W Barcelona
      type: "sleep",
      information: "<div class='info-window'><h4>W Barcelona</h4>"+ 
      '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>'+ "<br />" +
      '<h5><i class="fa fa-map-marker"></i> Plaça Rosa Del Vents 1, Final, Passeig de Joan de Borbó'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://www.marriott.com/hotels/travel/bcnwh-w-barcelona/' target='blank'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.391968625896496, 2.171801736426036), //Cotton House Hotel
      type: "sleep",
      information: "<div class='info-window'><h4>Cotton House Hotel</h4>"+ 
      '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>'+ "<br />" +
      '<h5><i class="fa fa-map-marker"></i> Gran Via de les Corts Catalanes, 670'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://www.hotelcottonhouse.com' target='blank'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.393826822152455, 2.17433123587537), //Casa Bonay
      type: "sleep",
      information:  "<div class='info-window'><h4>Casa Bonay</h4>"+ 
      '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>'+ "<br />" +
      '<h5><i class="fa fa-map-marker"></i> Gran Via de les Corts Catalanes, 700'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://casabonay.com' target='blank'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.25476786882916, 1.9046829936590812), //Little Beach House Barcelona
      type: "sleep",
      information:  "<div class='info-window'><h4>Little Beach House Barcelona</h4>"+ 
      '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>'+ "<br />" +
      '<h5><i class="fa fa-map-marker"></i> Carrer Mirador del Port, 1'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://www.sohohouse.com/houses/little-beach-house-barcelona' target='blank'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.38362545982422, 2.170773698636782), //Hotel 1898
      type: "sleep",
      information:  "<div class='info-window'><h4>Hotel 1898</h4>"+ 
      '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>'+ "<br />" +
      '<h5><i class="fa fa-map-marker"></i> La Rambla, 109'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://www.hotel1898.com/en/' target='blank'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.37183513905292, 2.1664444061486687), //Hotel Brummell
      type: "sleep",
      information:  "<div class='info-window'><h4>Hotel Brummell</h4>"+ 
      '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>'+ "<br />" +
      '<h5><i class="fa fa-map-marker"></i> Carrer Nou de la Rambla, 174'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://www.hotelbrummell.com' target='blank'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.39461890450198, 2.1632495658994504), //Alma Barcelona
      type: "sleep",
      information:  "<div class='info-window'><h4>Alma Barcelona</h4>"+ 
      '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>'+ "<br />" +
      '<h5><i class="fa fa-map-marker"></i> Carrer de Mallorca, 271'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://almahotels.com/barcelona/' target='blank'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.392077930481726, 2.1660268775265665), //Margot House
      type: "sleep",
      information:  "<div class='info-window'><h4>Margot House</h4>"+ 
      '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>'+ "<br />" +
      '<h5><i class="fa fa-map-marker"></i> Passeig de Gràcia, 46'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://margothouse.es' target='blank'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.382892906328806, 2.1793504801022032), //Mercer Hotel Barcelona
      type: "sleep",
      information: "<div class='info-window'><h4>Mercer Hotel Barcelona</h4>"+ 
      '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>'+ "<br />" +
      '<h5><i class="fa fa-map-marker"></i> Carrer dels Lledó, 7'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://www.mercerbarcelona.com/es' target='blank'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.380416815832355, 2.18082959451229), //The Serras Hotel Barcelona
      type: "sleep",
      information: "<div class='info-window'><h4>The Serras Hotel Barcelona</h4>"+ 
      '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>'+ "<br />" +
      '<h5><i class="fa fa-map-marker"></i> Passeig de Colom, 9'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://hoteltheserrasbarcelona.com' target='blank'> Visit website</a></h5></div>",
    },

    ];

    //sights locations
    var discover = [
     {
      position: new google.maps.LatLng(41.40432587365964, 2.174218047853699), //Sagrada Familia
      type: "discover",
      information: "<h4>Sagrada Familia</h4>",
    },
    {
      position: new google.maps.LatLng(41.41447866647113, 2.1526837704703126), //Parc Güell
      type: "discover",
      information: "<h4>Parc Güell</h4>",
    },
    {
      position: new google.maps.LatLng(41.395376427112694, 2.161880947544949), //Casa Milà
      type: "discover",
      information: "<h4>Casa Milà</h4>",
    },
    {
      position: new google.maps.LatLng(41.365478612991836, 2.167493493466441), //Montjuic
      type: "discover",
      information: "<h4>Montjuic</h4>",
    },
    {
      position: new google.maps.LatLng(41.391894463728136, 2.164935430233241), //Casa Batlló
      type: "discover",
      information: "<h4>Casa Batlló</h4>",
    },
    {
      position: new google.maps.LatLng(41.387650217922044, 2.1232806935160213), //Camp Nou
      type: "discover",
      information: "<h4>Camp Nou</h4>",
    },
    {
      position: new google.maps.LatLng(41.380424660929904, 2.189755392339966), //La Barceloneta
      type: "discover",
      information: "<h4>La Barceloneta</h4>",
    },
    {
      position: new google.maps.LatLng(41.381965261382774, 2.171553120810967), //La Boqueria Market
      type: "discover",
      information: "<h4>La Boqueria Market</h4>",
    },
    {
      position: new google.maps.LatLng(41.38335886348501, 2.166879483602256), //MACBA
      type: "discover",
      information: "<h4>MACBA</h4>",
    },
    {
      position: new google.maps.LatLng(41.37881557047545, 2.162059735872605), //Mercat de Sant Antoni
      type: "discover",
      information: "<h4>Mercat de Sant Antoni</h4>",
    },
    ];

    //shop locations
    var shop = [
     {
      position: new google.maps.LatLng(41.383871205004745, 2.168845377253543), //La Central
      type: "shop",
      information:"<div class='info-window'><h4>La Central</h4>"+ 
      '<h5><i class="fa fa-book"></i>'+ "<br />" +
      '<i class="far fa-clock"></i> Opening hours: 10h to 21h'+ "<br />" +
      '<i class="fa fa-map-marker"></i> Carrer de Mallorca, 237'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://www.lacentral.com'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.392742332196505, 2.176602149798577), //Sivasdescalzo
      type: "shop",
      information: "<div class='info-window'><h4>Sivasdescalzo</h4>"+ 
      '<h5><i class="fa fa-shoe-prints"></i>'+ "<br />" +
      '<i class="far fa-clock"></i> Opening hours: 11h to 17h'+ "<br />" +
      '<i class="fa fa-map-marker"></i> Carrer de Melcior de Palau, 36'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://www.sivasdescalzo.com/en/lifestyle'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.38335015596444, 2.1681139075210356), //Nuovum
      type: "shop",
      information:"<div class='info-window'><h4>Nuovum</h4>"+ 
      '<h5><i class="fas fa-gift"></i>'+ "<br />" +
      '<i class="far fa-clock"></i> Opening hours: 11h to 14h and 17h to 20h'+ "<br />" +
      '<i class="fa fa-map-marker"></i> Carrer dElisabets, 20'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://nuovum.com'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.37693102787546, 2.1622144494409516), //Llibreria Calders bookshop
      type: "shop",
      information:"<div class='info-window'><h4>Llibreria Calders</h4>"+ 
      '<h5><i class="fa fa-book"></i>'+ "<br />" +
      '<i class="far fa-clock"></i> Opening hours: 10h to 21h'+ "<br />" +
      '<i class="fa fa-map-marker"></i> Passatge de Pere Calders, 9'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://www.facebook.com/lacalders/'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.38252950814032, 2.1658988633922753), //Les Topettes
      type: "shop",
      information:"<div class='info-window'><h4>Les Topettes</h4>"+ 
      '<h5><i class="fa fa-gift"></i>'+ "<br />" +
      '<i class="far fa-clock"></i> Opening hours: 11h to 14h and 16h to 21h'+ "<br />" +
      '<i class="fa fa-map-marker"></i> Carrer de Melcior de Palau, 36'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://www.lestopettes.com'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.38464200260276, 2.174994406150571), //La Capell
      type: "shop",
      information:"<div class='info-window'><h4>La Capell</h4>"+ 
      '<h5><i class="fas fa-book-open"></i>'+ "<br />" +
      '<i class="far fa-clock"></i> Opening hours: 9.30h to 19h'+ "<br />" +
      '<i class="fa fa-map-marker"></i> Plaça Nova, 5'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://www.lacapell.com'> Visit website</a></h5></div>",
    },
    {
      position: new google.maps.LatLng(41.384489403245425, 2.1799833344975283), //Après Ski
      type: "shop",
      information:"<div class='info-window'><h4>Après Ski</h4>"+ 
      '<h5><i class="fa fa-tshirt"></i>'+ "<br />" +
      '<i class="far fa-clock"></i> Opening hours: 12h to 19h'+ "<br />" +
      '<i class="fa fa-map-marker"></i> C. dels Vigatans, 11'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://apresski.es'> Visit website</a></h5></div>",
    },
     {
      position: new google.maps.LatLng(41.38510575043293, 2.183773406972111), //Bobo Choses 
      type: "shop",
      information: "<div class='info-window'><h4>Bobo Choses</h4>"+ 
      '<h5><i class="fa fa-tshirt"></i>'+ "<br />" +
      '<i class="far fa-clock"></i> Opening hours: 11h to 20h'+ "<br />" +
      '<i class="fa fa-map-marker"></i> Carrer de la Ribera, 1'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://www.bobochoses.com/'> Visit website</a></h5></div>",
    },
     {
      position: new google.maps.LatLng(41.37882131918473, 2.1321906611337673), //Flowers by Bornay
      type: "shop",
      information: "<div class='info-window'><h4>Flowers by Bornay</h4>"+ 
      '<h5><i class="fas fa-seedling"></i>'+ "<br />" +
      '<i class="far fa-clock"></i> Opening hours: 10h to 14h and 15h to 18h'+ "<br />" +
      '<i class="fa fa-map-marker"></i> Carrer de Melcior de Palau, 36'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://bornay.ws'> Visit website</a></h5></div>",
    },
     {
      position: new google.maps.LatLng(41.39899206975049, 2.196778805056189), //Ultra-Local Records
      type: "shop",
      information: "<div class='info-window'><h4>Ultra-Local Records</h4>"+ 
      '<h5><i class="fa fa-music"></i>'+"<br />" +
      '<i class="far fa-clock"></i> Opening hours: 10h to 14h and 15h to 18h'+ "<br />" +
      '<i class="fa fa-map-marker"></i> Carrer de Pujades, 113'+ "<br />" +
      "<i class='fa fa-angle-double-right'></i><a href='https://www.facebook.com/Ultra-Local-Records-270410556408977/'target='blank'> Visit website</a></h5></div>",
    },
    ];
    



// Create markers for restaurants
//https://developers.google.com/maps/documentation/javascript/markers

  var i;
  var markers = [];

  $("#eat").click(function() {
    clearMarkers();
    map.setZoom(13);
    map.setCenter({
      lat: 41.390205,
      lng: 2.154007
    });

    
  for (let i = 0; i < eat.length; i++) {

      const marker = new google.maps.Marker({
      position: eat[i].position,
      animation: google.maps.Animation.DROP,
      icon: icons[eat[i].type].icon,
      map: map,
    });
    
    const infowindow = new google.maps.InfoWindow({
    content: eat[i].information,
    });

    marker.addListener("click", function(){
    infowindow.open(map, marker);   
    }); 
 
  
    markers.push(marker);
    }
    });

//Clear away any existing markers 
function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
}

// Create markers for hotels
  $("#sleep").click(function() {
    clearMarkers();
    map.setZoom(13);
    map.setCenter({
     lat: 41.390205,
     lng: 2.154007
    }); 

  for (let i = 0; i < sleep.length; i++) {
      const marker = new google.maps.Marker({
      position: sleep[i].position,
      animation: google.maps.Animation.DROP,
      icon: icons[sleep[i].type].icon,
      map: map,
    });

    //create info window
    const infowindow = new google.maps.InfoWindow({
    content: sleep[i].information,
  });
    marker.addListener("click", function(){
    infowindow.open(map, marker);    
  });

    markers.push(marker);  
}
  });

//Clear away any existing markers 
function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
}
  
// Create markers for sights
$("#discover").click(function() {
    clearMarkers();
    map.setZoom(13);
    map.setCenter({
       lat: 41.390205,
      lng: 2.154007
    });

  for (let i = 0; i < discover.length; i++) {
      const marker = new google.maps.Marker({
      position: discover[i].position,
      animation: google.maps.Animation.DROP,
      icon: icons[discover[i].type].icon,
      map: map,
    });

    //create info window
    const infowindow = new google.maps.InfoWindow({
    content: discover[i].information,
  });
    marker.addListener("click", function(){
    infowindow.open(map, marker);    
  });
    markers.push(marker);
 }
  });

//Clear away any existing markers 
function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
}

// Create markers for shops
  $("#shop").click(function() {
    clearMarkers();
    map.setZoom(13);
    map.setCenter({
       lat: 41.390205,
      lng: 2.154007
    });

  for (let i = 0; i < shop.length; i++) {
      const marker = new google.maps.Marker({
      position: shop[i].position,
      animation: google.maps.Animation.DROP,
      icon: icons[shop[i].type].icon,
      map: map,
    });
    //create info window
    const infowindow = new google.maps.InfoWindow({
    content: shop[i].information,
  });
    marker.addListener("click", function(){
    infowindow.open(map, marker);    
  });
    markers.push(marker);
 }
  });

  

 

 
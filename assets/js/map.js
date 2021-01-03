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
    },
    {
      position: new google.maps.LatLng(41.38198, 2.18383), //The Green Spot
      type: "eat",
    },
    {
      position: new google.maps.LatLng(41.37591, 2.15682), //Tickets
      type: "eat",
    },
    {
      position: new google.maps.LatLng(41.38952, 2.18171), //Picnic
      type: "eat",
    },
    {
      position: new google.maps.LatLng(41.37924, 2.17307), //Bar Cañete
      type: "eat",
    },
    {
      position: new google.maps.LatLng(41.38164, 2.17204), //Direkte Boqueria
      type: "eat",
    },
     {
      position: new google.maps.LatLng(41.384700053046565, 2.181695098818775), //El Xampanyet
      type: "eat",
    },
     {
      position: new google.maps.LatLng(41.38510245044985, 2.184462906972496), //Koku Kitchen Ramen & Gyoza Bar
      type: "eat",
    },
     {
      position: new google.maps.LatLng(41.39255514750829, 2.1674576214895405), //Tapas 24
      type: "eat",
    },
     {
      position: new google.maps.LatLng(41.37411213083554, 2.1655625478130056), //Quimet & Quimet 
      type: "eat",
    },

    ];

    //hotel locations
    var sleep = [
    {  
      position: new google.maps.LatLng(41.36852779108305, 2.190012429899792), //W Barcelona
      type: "sleep",
    },
    {
      position: new google.maps.LatLng(41.391968625896496, 2.171801736426036), //Cotton House Hotel, Autograph Collection
      type: "sleep",
    },
    {
      position: new google.maps.LatLng(41.393826822152455, 2.17433123587537), //Casa Bonay
      type: "sleep",
    },
    {
      position: new google.maps.LatLng(41.25476786882916, 1.9046829936590812), //Little Beach House Barcelona
      type: "sleep",
    },
    {
      position: new google.maps.LatLng(41.38362545982422, 2.170773698636782), //Hotel 1898
      type: "sleep",
    },
    {
      position: new google.maps.LatLng(41.37183513905292, 2.1664444061486687), //Hotel Brummell
      type: "sleep",
    },
    {
      position: new google.maps.LatLng(41.39461890450198, 2.1632495658994504), //Alma Barcelona
      type: "sleep",
    },
    {
      position: new google.maps.LatLng(41.392077930481726, 2.1660268775265665), //Margot House
      type: "sleep",
    },
    {
      position: new google.maps.LatLng(41.382892906328806, 2.1793504801022032), //Mercer Hotel Barcelona
      type: "sleep",
    },
    {
      position: new google.maps.LatLng(41.380416815832355, 2.18082959451229), //The Serras Hotel Barcelona
      type: "sleep",
    },

    ];

    //sights locations
    var discover = [
     {
      position: new google.maps.LatLng(41.40432587365964, 2.174218047853699), //Sagrada Familia
      type: "discover",
    },
    {
      position: new google.maps.LatLng(41.41447866647113, 2.1526837704703126), //Parc Güell
      type: "discover",
    },
    {
      position: new google.maps.LatLng(41.395376427112694, 2.161880947544949), //Casa Milà
      type: "discover",
    },
    {
      position: new google.maps.LatLng(41.365478612991836, 2.167493493466441), //Montjuic
      type: "discover",
    },
    {
      position: new google.maps.LatLng(41.391894463728136, 2.164935430233241), //Casa Batlló
      type: "discover",
    },
    {
      position: new google.maps.LatLng(41.387650217922044, 2.1232806935160213), //Camp Nou
      type: "discover",
    },
    {
      position: new google.maps.LatLng(41.380424660929904, 2.189755392339966), //La Barceloneta
      type: "discover",
    },
    {
      position: new google.maps.LatLng(41.381965261382774, 2.171553120810967), //La Boqueria Market
      type: "discover",
    },
    {
      position: new google.maps.LatLng(41.38335886348501, 2.166879483602256), //MACBA
      type: "discover",
    },
    {
      position: new google.maps.LatLng(41.37881557047545, 2.162059735872605), //Mercat de Sant Antoni
      type: "discover",
    },
    ];

    //shop locations
    var shop = [
     {
      position: new google.maps.LatLng(41.383871205004745, 2.168845377253543), //La Central
      type: "shop",
    },
    {
      position: new google.maps.LatLng(41.392742332196505, 2.176602149798577), //Sivasdescalzo
      type: "shop",
    },
    {
      position: new google.maps.LatLng(41.38335015596444, 2.1681139075210356), //Nuovum
      type: "shop",
    },
    {
      position: new google.maps.LatLng(41.37693102787546, 2.1622144494409516), //Llibreria Calders bookshop
      type: "shop",
    },
    {
      position: new google.maps.LatLng(41.38252950814032, 2.1658988633922753), //Les Topettes
      type: "shop",
    },
    {
      position: new google.maps.LatLng(41.38464200260276, 2.174994406150571), //La Capell
      type: "shop",
    },
    {
      position: new google.maps.LatLng(41.384489403245425, 2.1799833344975283), //Après Ski
      type: "shop",
    },
     {
      position: new google.maps.LatLng(41.38510575043293, 2.183773406972111), //Bobo Choses Barcelona Born
      type: "shop",
    },
     {
      position: new google.maps.LatLng(41.37882131918473, 2.1321906611337673), //Flowers by Bornay
      type: "shop",
    },
     {
      position: new google.maps.LatLng(41.39899206975049, 2.196778805056189), //Ultra-Local Records
      type: "shop",
      name: "<h3>Ultra-Local Records</h3>",
      information: "<p>hej hej</p>"
    },
    ];

/*

//Holds the information showed in each infowindow//
let infoObj= [];

// Iterates through the shops, adding info to each location//
for (let i = 0; i < shop.length; i++) {
        let contentString = '<h3>' + shop[i].name + '</h3>'+ shop[i].information;

 
// Adds infowindow //   
let infowindow = new google.maps.InfoWindow({
        content: contentString
        });

// Tells the page to show the infowindow when location is clicked, and to close any previously opened infowindow //
    marker.addListener("click", function () {
        closeOtherInfo();

        infowindow.open(map, marker);
        infoObj[0] = infowindow;
        });
    }

   
*/


    
// Create markers for restaurants
//https://developers.google.com/maps/documentation/javascript/markers

  var marker, i;
  var markers = [];

  $("#eat").click(function() {
    clearMarkers();
    map.setZoom(13);
    map.setCenter({
      lat: 41.390205,
      lng: 2.154007
    });

  for (let i = 0; i < eat.length; i++) {
      marker = new google.maps.Marker({
      position: eat[i].position,
       animation: google.maps.Animation.DROP,
      icon: icons[eat[i].type].icon,
      map: map,
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
      marker = new google.maps.Marker({
      position: sleep[i].position,
      animation: google.maps.Animation.DROP,
      icon: icons[sleep[i].type].icon,
      map: map,
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
     marker = new google.maps.Marker({
      position: discover[i].position,
      animation: google.maps.Animation.DROP,
      icon: icons[discover[i].type].icon,
      map: map,
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
      marker = new google.maps.Marker({
      position: shop[i].position,
      animation: google.maps.Animation.DROP,
      icon: icons[shop[i].type].icon,
      map: map,
    });
    markers.push(marker);
 }
  });

  

 

 
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://community-open-weather-map.p.rapidapi.com/weather?q=barcelona&lat=41.390205&lon=2.154007&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a31db3836bmsh573f42960ce6a02p1803f5jsn3d90afba6b57",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
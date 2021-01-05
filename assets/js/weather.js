/*weather data API from visual crossing: https://www.visualcrossing.com/weather-api*/

//weather forecast
   window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
   window.weatherWidgetConfig.push({
       selector:".weatherWidget",
       apiKey:"T4HHCRVBQ4B6T6NQQEZNEWYXV", 
       location:"Barcelona, Spain", //Enter an address
       unitGroup:"metric", //"us" or "metric"
       forecastDays:5, //how many days forecast to show
       title:"Barcelona", //optional title to show in the 
       showTitle:true, 
       showConditions:true
   });
  
   (function() {
   var d = document, s = d.createElement('script');
   s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
   s.setAttribute('data-timestamp', +new Date());
   (d.head || d.body).appendChild(s);
   })();


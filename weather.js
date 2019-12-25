const apiURI = "https://api.openweathermap.org/data/2.5/weather?q=Seoul,KR&appid=a4ba5206dc299d24bfe110482ef0bad8"



function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
}

function weatherBalloon() {
    fetch(apiURI)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        drawWeather(data);
      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
  };

function init(){
    weatherBalloon();
}

init();
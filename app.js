"use strict";

//variables defined in init.js file
searchButton.addEventListener('click', searchWeather); //add event listener to search button, call function

function searchWeather() {
    var cityName = searchCity.value; //store user input from city field
    var http = new XMLHttpRequest();
    var apiKey = "XXXXXXXXXXXXXXXXXXXXXX"; //user key from openweathermap.org
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + '&units=metric&appid=' + apiKey ;
    var method = 'GET';

    if (cityName.trim().length == 0) { //make sure there is an entry in the text field
        return alert('Please enter a city name');
    }

    http.open(method, url);
    http.onreadystatechange = function() {
        if(http.readyState == XMLHttpRequest.DONE && http.status === 200) {
            var data = JSON.parse(http.responseText);
            var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase()); //using constructor from weather-data.js
            weatherData.temperature = data.main.temp;
            console.log(weatherData);
        } else if (http.readyState === XMLHttpRequest.DONE ) {
            alert("Something went wrong. Please try again");
        }
    }
    http.send();
}
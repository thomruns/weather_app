"use strict";

//variables defined in init.js file
searchButton.addEventListener('click', searchWeather); //add event listener to search button, call function

function searchWeather() {
    loadingText.style.display = 'block';
    weatherBox.style.display = 'none';
    var cityName = searchCity.value; //store user input from HTML form city field
    var http = new XMLHttpRequest(); //HTTPRequest object
    var apiKey = "XXXXXXXXXXXXXXXXXXX"; //replace with user key from openweathermap.org
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + '&units=metric&appid=' + apiKey ; //
    var method = 'GET';

    if (cityName.trim().length == 0) { //make sure there is an entry in the text field
        return alert('Please enter a city name');
    }

    http.open(method, url);
    http.onreadystatechange = function() {
        if(http.readyState == XMLHttpRequest.DONE && http.status === 200) {
            var data = JSON.parse(http.responseText);
            var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase()); //using constructor from weather-data.js
            weatherData.temperature = data.main.temp; //from API data object
            //console.log(weatherData); //testing purposes only
            updateWeather(weatherData);
        } else if (http.readyState === XMLHttpRequest.DONE ) {
            alert("Something went wrong. Please try again");
        }
    }
    http.send();
}

function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;

    loadingText.style.display = 'none';
    weatherBox.style.display = 'block';
    
}
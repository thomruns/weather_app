"use strict";

//variables defined in init.js file
searchButton.addEventListener('click', searchWeather); //add event listener to search button, call function

function searchWeather() {
    var cityName = searchCity.value; //store user input from city field
    var http = new XMLHttpRequest();
    var apiKey = ""; //user key from openweathermap.org
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName;
    var method = 'GET';

    if (cityName.trim().length == 0) { //make sure there is an entry in the text field
        return alert('Please enter a city name');
    }

    http.open(method, url);
    http.onreadystatechange = function() {
        if(http.readyState == XMLHttpRequest.DONE && http.status === 200) {
            var data = JSON.parse(http.responseText);
        } else if (http.readyState === XMLHttpRequest.DONE ) {
            alert("Something went wrong. Please try again");
        }
    }
}
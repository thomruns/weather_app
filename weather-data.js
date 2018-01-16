"use strict";
//constructor function to use JSON data from weather service API
function Weather(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._temperature = ' ',
}

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function() {
        return this._temperature;
    },
    set: function(value) {
        this._temperature = (value * 1.8 + 32).toFixed(2) + 'F.'; //convert celsius to fahrenheit
    }
});
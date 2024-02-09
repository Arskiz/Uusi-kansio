"use strict";

const apiTarget = "http://api.weatherapi.com/v1/current.json";

const apiKey = "745513531ff64e8a80f104056240502";

function makeWeatherCall(city) {
    var list = document.getElementById("WeatherInformation");
    var infoDivParent = document.getElementById("infoDiv");
    list.innerHTML = ""; // Clear list
    infoDivParent.innerHTML = ""; // before adding stuff
    fetch(apiTarget + "?q=" + city + "&key=" + apiKey)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response failed.');
            }
            
            return response.json();
        })
        .then(data => {
            console.log(data);
            list.innerHTML +=
            '<p class="text" style="font-size: 40px; align-self: center; text-align: center;">' + data.location.name + ':</p><div class="weatherInfoDivInner"><div><p class="text">Temperature °C: ' +  data.current.temp_c + '°C  | ' + 'Feels like: ' + data.current.feelslike_c + '°C ' +'</p></div><div><p class="text">Temperature °F: ' + data.current.temp_f + '°F | '  + 'Feels like: ' + data.current.feelslike_f + '°F ' + '</p></div>' + '<div><p class="text">Condition: '  + data.current.condition.text + '</p></div></div>' + '<div><p class="text" style="margin-left:10px; font-size: 40px;">City Info:' + '</p></div>';

            // City and country Info
            list.innerHTML +=
            '<div class="weatherInfoDivInner"><div><p class="text">Country: ' + data.location.country + '</p></div><div><p class="text">City: ' + data.location.name + '</p></div><div><p class="text">Region: ' + data.location.region + '</p></div><div><p class="text">Local time: ' + data.location.localtime + '</p></div></div>' + '<div><p style="margin-left:10px;">(Last update: ' + data.current.last_updated + ')' + '</p></div>';
        })
        .catch(error => {
            infoDivParent.innerHTML += '<div class="infoDiv"><p class="text" style="color: red; font-weight: bolder; -webkit-text-stroke-width: 1px;-webkit-text-stroke-color: black;">Error:</p><p class="text">Invalid City!</p></div>'

            console.error(error);
            list.innerHTML += '<div><h1 style="color: red; font-size: 40px; text-align: center;-webkit-text-stroke-width: 1px;-webkit-text-stroke-color: black;">Error: [Code 69420] Check city name!</h1></div>'
        });

}
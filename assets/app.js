'use strict';

const apiKey = '08d2aab4fa37faf712b2e914cbe92b0d';
const getSubmitBtn = document.getElementById('submitBtn');
const getInputText = document.getElementById('inputCityName');

function getWeather(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
            //const d = data.main.temp;
            //console.log(d);
            let celcius = Math.round(Number(data.main.temp) - 273.15);
            document.getElementById('showTemp').textContent = celcius;

            let getCityName = data.name;
            document.getElementById('showCityName').textContent = getCityName;

            let getCountryName = data.sys.country;
            document.getElementById('showCountry').textContent = getCountryName;

            let getStatus = data.weather[0].main;
            document.getElementById('showStatus').textContent = getStatus;

            let getDesc = data.weather[0].description;
            document.getElementById('showDesc').textContent = getDesc;

            function getIcon(getIconName) {
                document.getElementById('showIcon').src = `http://openweathermap.org/img/wn/${getIconName}@2x.png`;
            }
            let anni = data.weather[0].icon;
            getIcon(anni);
        });
}

getWeather();

getSubmitBtn.addEventListener('click', function () {
    const dd = getInputText.value;
    getInputText.value = '';
    getWeather(dd);
});

window.onload = function () {
    getWeather('London');
};

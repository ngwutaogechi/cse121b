// script.js

function getWeather() {
    const cityInput = document.getElementById("cityInput").value;

    
    const apiKey = "ab028cb58c805f90db72d05db727c890";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const weatherInfoDiv = document.getElementById("weatherInfo");
            weatherInfoDiv.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Description: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            const weatherInfoDiv = document.getElementById("weatherInfo");
            weatherInfoDiv.innerHTML = `<p>${error.message}</p>`;
        });
}

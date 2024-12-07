// Dummy weather data for locations
const weatherData = {
    "New York": {
        temperature: "22°C",
        description: "Clear sky",
        humidity: "50%",
        windSpeed: "5 m/s"
    },
    "London": {
        temperature: "16°C",
        description: "Partly cloudy",
        humidity: "65%",
        windSpeed: "3 m/s"
    },
    "Tokyo": {
        temperature: "18°C",
        description: "Light rain",
        humidity: "70%",
        windSpeed: "4 m/s"
    },
    "Paris": {
        temperature: "20°C",
        description: "Sunny",
        humidity: "55%",
        windSpeed: "6 m/s"
    },
    "Sydney": {
        temperature: "25°C",
        description: "Clear sky",
        humidity: "60%",
        windSpeed: "7 m/s"
    }
};

// Function to display weather information for the selected city
function displayWeather(city) {
    const data = weatherData[city];
    if (data) {
        const weatherInfo = `
            <h2>${city}</h2>
            <p><strong>Temperature:</strong> ${data.temperature}</p>
            <p><strong>Weather:</strong> ${data.description}</p>
            <p><strong>Humidity:</strong> ${data.humidity}</p>
            <p><strong>Wind Speed:</strong> ${data.windSpeed}</p>
        `;
        document.getElementById('weather-info').innerHTML = weatherInfo;
    } else {
        document.getElementById('weather-info').innerHTML = "<p>Weather data unavailable for this location.</p>";
    }
}

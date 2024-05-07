class WeatherComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const weatherKey = "";
        const zip = 64105;
        const countrycode = "us"; // US country code
        const weatherURL = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},${countrycode}&appid=${weatherKey}`;

        // Placeholder text for description and weatherOutput
        const placeholderDescription = "Fetching weather...";
        const placeholderWeatherOutput = "--°F";

        // Set placeholder text while fetching data
        this.shadowRoot.innerHTML = `
            <style>
            .weather-wrapper {
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            </style>
            <div class="weather-wrapper">
                <div style="height:100px;width:100px;background-color:fff;">Loading...</div>
                <div>
                    <p>Loading...</p>
                    <p>${placeholderDescription}</p>
                    <p>${placeholderWeatherOutput}</p>
                </div>
            </div>
        `;

        fetch(weatherURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const city = data.name;
                const country = data.country;
                const latitude = data.lat;
                const longitude = data.lon;
                const weatherInfoURL = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherKey}&units=imperial`;
                return fetch(weatherInfoURL);
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Weather data response was not ok');
                }
                return response.json();
            })
            .then(weatherData => {
                const temperature = Math.round(weatherData.main.temp);
                const description = weatherData.weather[0].description;
                const weatherIcon = weatherData.weather[0].icon;
                const weatherIconURL = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
                const weatherOutput = `${temperature}°F`;
                this.shadowRoot.innerHTML = `
                    <style>
                    .weather-wrapper {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }
                    </style>
                    <div class="weather-wrapper">
                        <img src="${weatherIconURL}" alt="${description}">
                        <div>
                            <p>Kansas City, MO</p>
                            <p>${description}</p>
                            <p>${weatherOutput}</p>
                        </div>
                    </div>
                `;
            })
            .catch(error => {
                console.error('There was a problem fetching the weather data:', error);
                this.shadowRoot.innerHTML = `
                    <p>Failed to fetch weather data</p>
                `;
            });
    }
}

customElements.define('app-weather', WeatherComponent);

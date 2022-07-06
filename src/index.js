const form = document.querySelector("form");
let cityName;

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const locationValue = document.querySelector("#location").value;
	cityName = locationValue;
	fetchWeather(cityName);
});

async function fetchWeather(cityName) {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=117049559656dc4e3b886385de74c2d0`
		);
		const weatherData = await response.json();

		const data = requiredData(weatherData);
	} catch (error) {
		console.log(error);
	}
}

function requiredData(weatherData) {
	let location = weatherData.name;
	let country = weatherData.sys.country;
	let temp = weatherData.main.temp;
	let pressure = weatherData.main.pressure;
	let humidity = weatherData.main.humidity;

	console.log(location, "Location");
	console.log(country, "Country");
	console.log(temp, "Temp");
	console.log(pressure, "Pressure");
	console.log(humidity, "Humidity");

	return { location, country, temp, pressure, humidity };
}

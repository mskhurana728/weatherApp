const form = document.querySelector("form");
const weatherInfo = document.querySelector(".weatherInfo");
let cityName;

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const locationValue = document.querySelector("#location").value;
	cityName = locationValue;
	fetchWeather(cityName);
	weatherInfo.style.visibility = "visible";
	weatherInfo.textContent = "Loading...";
});

async function fetchWeather(cityName) {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=117049559656dc4e3b886385de74c2d0`
		);
		const weatherData = await response.json();

		const data = requiredData(weatherData);
		displayWeather(data);
	} catch (error) {
		weatherInfo.textContent = `Sorry Cannot Get The Weather Of ${cityName}!!!`;

		console.log(error);
	}
}
function displayWeather(data) {
	weatherInfo.textContent = "";
	const city = document.createElement("p");
	city.classList.add("city");
	city.textContent = data.location;
	const country = document.createElement("p");
	country.classList.add("country");
	country.textContent = data.country;
	const temp = document.createElement("p");
	temp.classList.add("temp");
	temp.textContent = "Temp:     " + data.temp + "°C";
	const pressure = document.createElement("p");
	pressure.classList.add("pressure");
	pressure.textContent = "Pressure:  " + data.pressure;
	const humidity = document.createElement("p");
	humidity.classList.add("humidity");
	humidity.textContent = "Humidity: " + data.humidity;
	weatherInfo.append(city, country, temp, pressure, humidity);
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

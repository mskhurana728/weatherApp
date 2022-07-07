/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELFNBQVM7QUFDakU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILCtEQUErRCxTQUFTOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbmNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVySW5mb1wiKTtcbmxldCBjaXR5TmFtZTtcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3QgbG9jYXRpb25WYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYXRpb25cIikudmFsdWU7XG5cdGNpdHlOYW1lID0gbG9jYXRpb25WYWx1ZTtcblx0ZmV0Y2hXZWF0aGVyKGNpdHlOYW1lKTtcblx0d2VhdGhlckluZm8uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXHR3ZWF0aGVySW5mby50ZXh0Q29udGVudCA9IFwiTG9hZGluZy4uLlwiO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihjaXR5TmFtZSkge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG5cdFx0XHRgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZ1bml0cz1tZXRyaWMmQVBQSUQ9MTE3MDQ5NTU5NjU2ZGM0ZTNiODg2Mzg1ZGU3NGMyZDBgXG5cdFx0KTtcblx0XHRjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRcdGNvbnN0IGRhdGEgPSByZXF1aXJlZERhdGEod2VhdGhlckRhdGEpO1xuXHRcdGRpc3BsYXlXZWF0aGVyKGRhdGEpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHdlYXRoZXJJbmZvLnRleHRDb250ZW50ID0gYFNvcnJ5IENhbm5vdCBHZXQgVGhlIFdlYXRoZXIgT2YgJHtjaXR5TmFtZX0hISFgO1xuXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHR9XG59XG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlcihkYXRhKSB7XG5cdHdlYXRoZXJJbmZvLnRleHRDb250ZW50ID0gXCJcIjtcblx0Y29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjaXR5LmNsYXNzTGlzdC5hZGQoXCJjaXR5XCIpO1xuXHRjaXR5LnRleHRDb250ZW50ID0gZGF0YS5sb2NhdGlvbjtcblx0Y29uc3QgY291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb3VudHJ5LmNsYXNzTGlzdC5hZGQoXCJjb3VudHJ5XCIpO1xuXHRjb3VudHJ5LnRleHRDb250ZW50ID0gZGF0YS5jb3VudHJ5O1xuXHRjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHRlbXAuY2xhc3NMaXN0LmFkZChcInRlbXBcIik7XG5cdHRlbXAudGV4dENvbnRlbnQgPSBcIlRlbXA6ICAgICBcIiArIGRhdGEudGVtcCArIFwiwrBDXCI7XG5cdGNvbnN0IHByZXNzdXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHByZXNzdXJlLmNsYXNzTGlzdC5hZGQoXCJwcmVzc3VyZVwiKTtcblx0cHJlc3N1cmUudGV4dENvbnRlbnQgPSBcIlByZXNzdXJlOiAgXCIgKyBkYXRhLnByZXNzdXJlO1xuXHRjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRodW1pZGl0eS5jbGFzc0xpc3QuYWRkKFwiaHVtaWRpdHlcIik7XG5cdGh1bWlkaXR5LnRleHRDb250ZW50ID0gXCJIdW1pZGl0eTogXCIgKyBkYXRhLmh1bWlkaXR5O1xuXHR3ZWF0aGVySW5mby5hcHBlbmQoY2l0eSwgY291bnRyeSwgdGVtcCwgcHJlc3N1cmUsIGh1bWlkaXR5KTtcbn1cblxuZnVuY3Rpb24gcmVxdWlyZWREYXRhKHdlYXRoZXJEYXRhKSB7XG5cdGxldCBsb2NhdGlvbiA9IHdlYXRoZXJEYXRhLm5hbWU7XG5cdGxldCBjb3VudHJ5ID0gd2VhdGhlckRhdGEuc3lzLmNvdW50cnk7XG5cdGxldCB0ZW1wID0gd2VhdGhlckRhdGEubWFpbi50ZW1wO1xuXHRsZXQgcHJlc3N1cmUgPSB3ZWF0aGVyRGF0YS5tYWluLnByZXNzdXJlO1xuXHRsZXQgaHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5O1xuXG5cdGNvbnNvbGUubG9nKGxvY2F0aW9uLCBcIkxvY2F0aW9uXCIpO1xuXHRjb25zb2xlLmxvZyhjb3VudHJ5LCBcIkNvdW50cnlcIik7XG5cdGNvbnNvbGUubG9nKHRlbXAsIFwiVGVtcFwiKTtcblx0Y29uc29sZS5sb2cocHJlc3N1cmUsIFwiUHJlc3N1cmVcIik7XG5cdGNvbnNvbGUubG9nKGh1bWlkaXR5LCBcIkh1bWlkaXR5XCIpO1xuXG5cdHJldHVybiB7IGxvY2F0aW9uLCBjb3VudHJ5LCB0ZW1wLCBwcmVzc3VyZSwgaHVtaWRpdHkgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
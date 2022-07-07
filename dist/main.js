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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELFNBQVM7QUFDakU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDViIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuY29uc3Qgd2VhdGhlckluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXJJbmZvXCIpO1xubGV0IGNpdHlOYW1lO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBsb2NhdGlvblZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhdGlvblwiKS52YWx1ZTtcblx0Y2l0eU5hbWUgPSBsb2NhdGlvblZhbHVlO1xuXHRmZXRjaFdlYXRoZXIoY2l0eU5hbWUpO1xuXHR3ZWF0aGVySW5mby5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5cdHdlYXRoZXJJbmZvLnRleHRDb250ZW50ID0gXCJMb2FkaW5nLi4uXCI7XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKGNpdHlOYW1lKSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcblx0XHRcdGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JnVuaXRzPW1ldHJpYyZBUFBJRD0xMTcwNDk1NTk2NTZkYzRlM2I4ODYzODVkZTc0YzJkMGBcblx0XHQpO1xuXHRcdGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG5cdFx0Y29uc3QgZGF0YSA9IHJlcXVpcmVkRGF0YSh3ZWF0aGVyRGF0YSk7XG5cdFx0ZGlzcGxheVdlYXRoZXIoZGF0YSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHR9XG59XG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlcihkYXRhKSB7XG5cdHdlYXRoZXJJbmZvLnRleHRDb250ZW50ID0gXCJcIjtcblx0Y29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjaXR5LmNsYXNzTGlzdC5hZGQoXCJjaXR5XCIpO1xuXHRjaXR5LnRleHRDb250ZW50ID0gZGF0YS5sb2NhdGlvbjtcblx0Y29uc3QgY291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb3VudHJ5LmNsYXNzTGlzdC5hZGQoXCJjb3VudHJ5XCIpO1xuXHRjb3VudHJ5LnRleHRDb250ZW50ID0gZGF0YS5jb3VudHJ5O1xuXHRjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHRlbXAuY2xhc3NMaXN0LmFkZChcInRlbXBcIik7XG5cdHRlbXAudGV4dENvbnRlbnQgPSBcIlRlbXA6ICAgICBcIiArIGRhdGEudGVtcCArIFwiwrBDXCI7XG5cdGNvbnN0IHByZXNzdXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHByZXNzdXJlLmNsYXNzTGlzdC5hZGQoXCJwcmVzc3VyZVwiKTtcblx0cHJlc3N1cmUudGV4dENvbnRlbnQgPSBcIlByZXNzdXJlOiAgXCIgKyBkYXRhLnByZXNzdXJlO1xuXHRjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRodW1pZGl0eS5jbGFzc0xpc3QuYWRkKFwiaHVtaWRpdHlcIik7XG5cdGh1bWlkaXR5LnRleHRDb250ZW50ID0gXCJIdW1pZGl0eTogXCIgKyBkYXRhLmh1bWlkaXR5O1xuXHR3ZWF0aGVySW5mby5hcHBlbmQoY2l0eSwgY291bnRyeSwgdGVtcCwgcHJlc3N1cmUsIGh1bWlkaXR5KTtcbn1cblxuZnVuY3Rpb24gcmVxdWlyZWREYXRhKHdlYXRoZXJEYXRhKSB7XG5cdGxldCBsb2NhdGlvbiA9IHdlYXRoZXJEYXRhLm5hbWU7XG5cdGxldCBjb3VudHJ5ID0gd2VhdGhlckRhdGEuc3lzLmNvdW50cnk7XG5cdGxldCB0ZW1wID0gd2VhdGhlckRhdGEubWFpbi50ZW1wO1xuXHRsZXQgcHJlc3N1cmUgPSB3ZWF0aGVyRGF0YS5tYWluLnByZXNzdXJlO1xuXHRsZXQgaHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5O1xuXG5cdGNvbnNvbGUubG9nKGxvY2F0aW9uLCBcIkxvY2F0aW9uXCIpO1xuXHRjb25zb2xlLmxvZyhjb3VudHJ5LCBcIkNvdW50cnlcIik7XG5cdGNvbnNvbGUubG9nKHRlbXAsIFwiVGVtcFwiKTtcblx0Y29uc29sZS5sb2cocHJlc3N1cmUsIFwiUHJlc3N1cmVcIik7XG5cdGNvbnNvbGUubG9nKGh1bWlkaXR5LCBcIkh1bWlkaXR5XCIpO1xuXG5cdHJldHVybiB7IGxvY2F0aW9uLCBjb3VudHJ5LCB0ZW1wLCBwcmVzc3VyZSwgaHVtaWRpdHkgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
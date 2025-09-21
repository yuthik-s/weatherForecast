const apiKey = "d2ab67fd2add2c28c895fe1a70bbe196";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var cardHo = document.querySelector(".card");
var inputHo = document.querySelector(".inp");
var cityHo = document.querySelector(".city");
var weatherimgHo = document.querySelector(".wimg");
var temperatureHo = document.querySelector(".temp");
var humidityHo = document.querySelector(".humidity");
var windspeedHo = document.querySelector(".speed");
var hideHo = document.querySelector(".hide");
var submitHo = document.querySelector(".sub");
var head = document.querySelector(".hd");

hideHo.style.display = "none";

async function checkWeather(city) {
  if (!city) {
    window.alert("Please enter a city name");
    return;
  }

  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  if (data.cod === 200) {
    hideHo.style.display = "block";

    cityHo.innerHTML = data.name;
    temperatureHo.innerHTML = Math.round(data.main.temp) + "°C";
    humidityHo.innerHTML = data.main.humidity + "%";
    windspeedHo.innerHTML = data.wind.speed + "m/s";

    if (data.weather[0].main === "Clouds") {
      weatherimgHo.src = "./assets/cloud.svg";
    } else if (data.weather[0].main === "Clear") {
      weatherimgHo.src = "./assets/clear.svg";
    } else if (data.weather[0].main === "Rain") {
      weatherimgHo.src = "./assets/rain.svg";
    } else if (data.weather[0].main === "Drizzle") {
      weatherimgHo.src = "./assets/drizzle.svg";
    } else if (data.weather[0].main === "Mist") {
      weatherimgHo.src = "./assets/fog.svg";
    } else if (data.weather[0].main === "Snow") {
      weatherimgHo.src = "./assets/image.png";
    }
  } else {
    alert("City not Found");
  }
}

submitHo.addEventListener("click", () => {
  checkWeather(inputHo.value);
});

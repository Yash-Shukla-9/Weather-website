const apikey = "d40606aa33acb5f6f62160e6d2117d08";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let inputdata = document.querySelector(".inpt");
let btn = document.querySelector(".btn");
let weather = document.querySelector(".Weather");

let error = document.querySelector(".error");

let ww = document.querySelector(".weath");

async function getWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  const data = await response.json();
  console.log(data);

  if (response.status == 404) {
    error.style.display = "block";
    ww.style.display = "none";
  } else {
    let tem = (document.querySelector(".Temp").innerHTML =
      Math.round(data.main.temp) + "℃");

    let cityname = (document.querySelector(".city").innerHTML = data.name);

    let humidity = (document.querySelector(".humi").innerHTML =
      data.main.humidity + " %");

    let visibility = (document.querySelector(".visi").innerHTML =
      data.visibility + " Miles");

    let Wind = (document.querySelector(".windi").innerHTML =
      data.wind.speed + " km/h");

    if (data.weather[0].main == "Clear") {
      weather.src = "./images/sun.png";
    } else if (data.weather[0].main == "Clouds") {
      weather.src = "./images/cloud.png";
    } else if (data.weather[0].main == "Rain") {
      weather.src = "./images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weather.src = "./images/weather.png";
    } else if (data.weather[0].main == "Mist") {
      weather.src = "./images/storm.png";
    }

    ww.style.display = "block";
    error.style.display = "none";
  }
}

btn.addEventListener("click", () => {
  getWeather(inputdata.value);

  inputdata.value = "";
});

function infoReplace(response) {
  let newCity = document.querySelector("#city");
  let date = new Date(response.data.time * 1000);
  let newTime = document.querySelector("#time");
  let newCondition = document.querySelector("#condition");
  let newHumidity = document.querySelector("#humidity-levels");
  let newWind = document.querySelector("#wind-levsl");
  let newIcon = document.querySelector("#icon");
  let newTemp = document.querySelector("#new-temperature-details");
  let temp = response.data.temperature.current;

  newCity.innerHTML = response.data.city;
  newTime.innerHTML = newDate(date);
  newCondition.innerHTML = response.data.condition.description;
  newHumidity.innerHTML = `${response.data.temperature.humidity}%`;
  newWind.innerHTML = `${response.data.wind.speed} km/h`;
  newIcon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
  newTemp.innerHTML = Math.round(temp);
}

function newDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satruday",
    "Sunday",
  ];

  let day = days[date.getDay()];

  return `${day}, ${hours}:${minutes}`;
}

function apiInfo(city) {
  let apiKey = "c7ftf274d3d91fafbb5d44dcc6403e2o";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(infoReplace);
}

function submit(event) {
  event.preventDefault();
  let search = document.querySelector("#search-for-city");

  apiInfo(search.value);
}

let newSearch = document.querySelector("#search-1");
newSearch.addEventListener("submit", submit);

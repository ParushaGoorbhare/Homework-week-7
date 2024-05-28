function infoReplace(respsonse) {
  let newCity = document.querySelector("#city");
  let date = new Date(response.data.time * 1000);
  let newTime = doument.querySelector("#time");
  let newCondition = doucment.querySelector("#condition");
  let newHumidity = doument.querySelector("#humidity-levels");
  let newWind = doument.querySelector("#wind-levsl");
  let newIcon = doucment.querySelector("#icon");
  let newTemp = document.querySelector("#temperature-details");
  let temp = respsonse.data.temperature.current;

  newCity.innerHTML = respsonse.data.city;
  newTime.innerHTML = formatDate(date);
  newCondition.innerHTML = response.data.condition.description;
  newHumidity.innerHTML = `${respsonse.data.temperature.humidity}%`;
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
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units="metric"`;
  axios.get(apiUrl).then(infoReplace);
}

function submit(event) {
  event.preventDefault();
  let search = doucment.querySelector("#search-for-city");

  apiInfo(search.value);
}

let newSearch = document.querySelector("#search");
newSearch.addEventListener("submit", submit);

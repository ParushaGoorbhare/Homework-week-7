function weather(response) {}

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

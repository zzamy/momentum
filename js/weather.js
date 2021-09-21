const API_KEY = "b19550c71fecc85e73bcb7b72641dc72";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`You live in ${lat}, ${lon}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = `${data.name}`;
      console.log(data.weather[0].main);
      let weatherIcon;
      /*switch (data.weather[0].main) {
        case "Clouds":
          weatherIcon = "☁️";
        case "Thunderstorm":
          weatherIcon = "⚡️";
        case "Drizzle":
          weatherIcon = "🌦";
        case "Rain":
          weatherIcon = "🌧";
        case "Snow":
          weatherIcon = "☃️";
        case "Mist":
          weatherIcon = "🌫";
        case "Smoke":
          weatherIcon = "💨";
        case "Haze":
          weatherIcon = "🌫";
        case "Dust":
          weatherIcon = "🌫";
        case "Fog":
          weatherIcon = "🌫";
        case "Sand":
          weatherIcon = "😷";
        case "Ash":
          weatherIcon = "😷";
        case "Squall":
          weatherIcon = "⛈";
        case "Tornado":
          weatherIcon = "🌪";
        case "Clear":
          weatherIcon = "☀️";
        default:
          weatherIcon = "No Signal";
      }*/
      if ((data.weather[0].main = "Clouds")) weatherIcon = "☁️";
      else if ((data.weather[0].main = "Thunderstorm")) weatherIcon = "⚡️";
      else if ((data.weather[0].main = "Drizzle")) weatherIcon = "🌦";
      else if ((data.weather[0].main = "Rain")) weatherIcon = "🌧";
      else if ((data.weather[0].main = "Snow")) weatherIcon = "☃️";
      else if ((data.weather[0].main = "Mist")) weatherIcon = "🌫";
      else if ((data.weather[0].main = "Smoke")) weatherIcon = "💨";
      else if ((data.weather[0].main = "Haze")) weatherIcon = "🌫";
      else if ((data.weather[0].main = "Dust")) weatherIcon = "🌫";
      else if ((data.weather[0].main = "Fog")) weatherIcon = "🌫";
      else if ((data.weather[0].main = "Sand")) weatherIcon = "😷";
      else if ((data.weather[0].main = "Dust")) weatherIcon = "😷";
      else if ((data.weather[0].main = "Ash")) weatherIcon = "😷";
      else if ((data.weather[0].main = "Squall")) weatherIcon = "⛈";
      else if ((data.weather[0].main = "Tornado")) weatherIcon = "🌪";
      else if ((data.weather[0].main = "Clear")) weatherIcon = "☀️";
      weather.innerText = `${weatherIcon} ${data.main.temp}°C`;
    })
  );
}

function onGeoError() {
  alert(
    "We can't check your location. if you want to know the weather for your location, Pleae allow to check your location"
  );
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

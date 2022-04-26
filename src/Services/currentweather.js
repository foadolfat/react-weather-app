export function currentweather(location) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  return fetch(URL)
    .then(response => response.json())
    .catch(error => console.log(error));
}   
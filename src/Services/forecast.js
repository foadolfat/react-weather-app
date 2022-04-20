export function forecast(coordinates) {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.data[0].latitude}&lon=${coordinates.data[0].longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  
    return fetch(URL)
      .then(response => response.json())
      .catch(error => console.log(error));
}   
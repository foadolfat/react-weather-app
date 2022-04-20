export function geolocation(location){
    const URL = `http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_GEO_KEY}&query=${location}`;
    return fetch(URL)
    .then(response => response.json())
    .catch(error => console.log(error));
}
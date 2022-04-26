import {forecast} from '../Services/forecast.js';
import {currentweather} from '../Services/currentweather.js';
import {icon} from '../Services/icon.js';
import * as React from "react";

export const Context = React.createContext();

const WeatherContext = ({children}) => {
	const [location, setLocation] = React.useState("Roseville");
	const [current, setCurrent] = React.useState();
	const [forecastState, setForecast] = React.useState();

	React.useEffect(() => {
		
		forecast(location).then(data => {
			data.list && data.list.map( (forecast, index) => {
				return forecast.weather[0].icon  = icon(forecast.weather[0].icon)
			})
			data.cod==="200" && setForecast(data);
		});
		
		currentweather(location).then(data => {
			data.cod===200 && setCurrent(data);
		});

	} , [location]);

	return (
		<Context.Provider value={{loc:[location, setLocation], cur:[current], fo:[forecastState]}}>
			{children}
		</Context.Provider>
	);
}
export default WeatherContext;
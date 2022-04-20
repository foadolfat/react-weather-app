import * as React from "react";
import {currentweather} from '../Services/currentweather.js';
import {geolocation} from '../Services/geolocation.js';
import { useLocation, LOCATION_DISPATCH_ACTION } from "../Contexts/LocationContext";


const Currentweather = () => {
    const [current, setCurrent] = React.useState(null);
    const [ location, locationDispatcher ] = useLocation();
    React.useEffect(() => {
        geolocation(location.location).then(data => {
            locationDispatcher([
                {
                    action: LOCATION_DISPATCH_ACTION.SET_LAT,
                    payload: data.data[0].latitude
                },
                {
                    action: LOCATION_DISPATCH_ACTION.SET_LON,
                    payload: data.data[0].longitude
                }
            ]);
            currentweather(data).then(data => {
                setCurrent(data);
            })
        })
    }, [location.location]);

    return(
        <div>
            
            {current && (
                <div>
                    <h2>{current.name}</h2>
                    <p>{current.weather[0].description}</p>
                    <p>{1.8*(((current.main.temp))-273) + 32}</p>
                    
                </div>
            )}
        </div>

    )
}
export default Currentweather;

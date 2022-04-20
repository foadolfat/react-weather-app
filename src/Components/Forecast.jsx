import * as React from "react";
import {forecast} from '../Services/forecast.js';
import {geolocation} from '../Services/geolocation.js';
import { useLocation, LOCATION_DISPATCH_ACTION } from "../Contexts/LocationContext";
import Weatherinfo from './Weatherinfo.jsx';

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
            forecast(data).then(data => {
                setCurrent(data);
                
            }).then( () => {
                console.log("forecast is ",current)
            })
        })
    }, [location.location]);

    return(
        <div>
            {current && (
                <div>
                    {
                        current.list.map( (forecast, index) => {
                            return(
                                <Weatherinfo forecast={forecast} key={index}/>
                            )
                        })
                    }
                </div>
            )}
        </div>

    )
}
export default Currentweather;

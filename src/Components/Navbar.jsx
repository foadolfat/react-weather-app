import * as React from "react";
import {currentweather} from '../Services/currentweather.js';
import {geolocation} from '../Services/geolocation.js';
import { useLocation, LOCATION_DISPATCH_ACTION } from "../Contexts/LocationContext";

const Navbar = () => {
    const [ location, locationDispatcher ] = useLocation();
    return(
        <div>
            <input type="text" id="city" placeholder="City" />
            <button onClick={() => {
                const city = document.getElementById('city').value;
                locationDispatcher([
					{
						action: LOCATION_DISPATCH_ACTION.SET_LOCATION,
						payload: city
					}
				]);
            }}>Get Weather</button>
            
        </div>

    )
}
export default Navbar;
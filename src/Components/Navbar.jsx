import * as React from "react";
import {Context} from "../Contexts/WeatherContext";

const Navbar = ({mode, setMode}) => {
    const {loc} = React.useContext(Context);
    const [location, setLocation] = loc;
    return(
        <div>
            <input type="text" id="city" placeholder={location}/>
            <button onClick={() => {
                const city = document.getElementById('city').value;
                setLocation(city)
            }}>Get Weather</button>
            <button onClick={() => {
                if(mode === 'current') {
                    setMode('forecast');
                } else {
                    setMode('current');
                }
            }}>{mode === 'current' ? 'Forecast' : 'Current'}</button>
            
        </div>

    )
}
export default Navbar;
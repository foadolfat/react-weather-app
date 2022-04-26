import * as React from "react";
import  {Context}  from "../Contexts/WeatherContext";


const Currentweather = () => {
    const {cur} = React.useContext(Context);
    const [current] = cur;
    return(
        <div style={{margin:'20px', padding:'10px', borderStyle: 'solid', 
                    borderRadius: '25px', boxShadow: '5px 5px', width: '300px', height: '100%'}}>
            
            {current && (
                <div>
                    <h2>{current.name}</h2>
                    <p>{current.weather[0].description}</p>
                    <p>{(1.8*(((current.main.temp))-273) + 32).toFixed(2)}</p>
                </div>
            )}
        </div>

    )
}
export default Currentweather;

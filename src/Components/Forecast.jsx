import * as React from "react";
import {Context} from "../Contexts/WeatherContext";
import Days from './Days.jsx';

const Forecast = () => {
    const {fo} = React.useContext(Context);
    const [forecastState] = fo;
    const [ days, setDays] = React.useState([]);
    React.useEffect(() => {
        var lastDate = "";
        var result = [];
        forecastState.list.map(forecast => {
            if(forecast.dt_txt.substring(0,10) !== lastDate){
                lastDate = forecast.dt_txt.substring(0,10);
                result.push([forecast]);
            } else {
                result[result.length-1].push(forecast);
            }
            return 0;
        })
        setDays(result);
    }, [forecastState]);

    return(
        <div >
            {days && (
                <div>
                    {
                        days.map( (day, index) => {
                            return(
                                <Days day={day} key={index}/>
                            )
                        })
                    }
                </div>
            )}
        </div>

    )
}
export default Forecast;
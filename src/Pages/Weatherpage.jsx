import React from "react"
import Navbar from '../Components/Navbar.jsx';
import Currentweather from '../Components/Currentweather.jsx';
import Forecast from '../Components/Forecast.jsx';

const Weatherpage = () => {
    const [ mode, setMode ] = React.useState('current');

        

    return(
        <div>
            <div>
                <Navbar setMode={setMode} mode={mode}/>
            </div>
            <div>
                {mode === 'current' ? <Currentweather /> : <Forecast />}
            </div>

        </div>

    )
}

export default Weatherpage;
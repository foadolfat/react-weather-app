import Navbar from '../Components/Navbar.jsx';
import Currentweather from '../Components/Currentweather.jsx';
import Forecast from '../Components/Forecast.jsx';

const Weatherpage = () => {
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Currentweather />
            </div>
            <div>
                <Forecast />
            </div>
        </div>
    )
}

export default Weatherpage;
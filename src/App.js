import Weatherpage from './Pages/Weatherpage';
import WeatherContext from './Contexts/WeatherContext';

function App() {
  return (
    <WeatherContext>
      <div className="App">
        <Weatherpage />
      </div>
    </WeatherContext>
  );
}

export default App;

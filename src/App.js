import Weatherpage from './Pages/Weatherpage';
import LocationContext from './Contexts/LocationContext';

function App() {
  return (
    <LocationContext>
      <div className="App">
        <Weatherpage />
      </div>
    </LocationContext>
  );
}

export default App;

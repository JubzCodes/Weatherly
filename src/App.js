import './App.css';
import Search from './components/Search';
import DateAndTime from './components/DateAndTime';
import CityAndWeather from './components/CityAndWeather';

function App() {
  return (
    <div className="App">
      <h1>WEATHERLY</h1>
      <div className="links">
        <span>Vancouver</span>
        <span>Hamilton</span>
        <span>Toronto</span>
        <span>Kingston</span>
        <span>Ottawa</span>
      </div>
      <div className="search-and-city">
        <div>
          <Search />
          <DateAndTime />
          </div>
        <div className="city-and-weather">
          <CityAndWeather />
        </div>
      </div>
      <div className="feel-and-temperature">
        <div className="feels">
          <span>feels like</span>
          <span>humidity</span>
          <span>wind</span>
        </div>
        <div>
          <h1>TEMP °C</h1>
          <div className="symbols">
            <button>C</button>
            <button>F</button>
          </div>
        </div>
      </div>
      <div className="sun-times">
        <span>rise</span>
        <span>set</span>
      </div>
      <div className="hourly-forecast"></div>
      <div className="weekly-forecast"></div>
    </div>
  );
}

export default App;

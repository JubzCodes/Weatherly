import './App.css';
import Search from './components/Search';
import DateAndTime from './components/DateAndTime';
import CityAndWeather from './components/CityAndWeather';
import FeelsAndTemperature from './components/FeelsAndTemperature';
import SunsetAndTemperatures from './components/SunsetAndTemperatures'
import Forecast from './components/Forecast';
import { useEffect } from 'react';
import getFormattedWeather from './helpers';

function App() {


  //HANDLE API CALL
    const getWeather = async () => {
      const data = await getFormattedWeather({ q: "toronto" });
      console.log(data)
    }
    
    getWeather();

  return (
    <div className="App">
      <h1 className="title">WEATHERLY</h1>
      <div className="links">
        <span>Vancouver</span>
        <span>Hamilton</span>
        <span>Toronto</span>
        <span>Kingston</span>
        <span>Ottawa</span>
      </div>
      <div className="search-and-city">
        <div className="search-time">
          <Search />
          <DateAndTime />
        </div>
        <div className="city-and-weather">
          <CityAndWeather />
        </div>
      </div>
      <div className="feels-and-temperature">
        <FeelsAndTemperature />
      </div>
      <div className="sunset-and-temperatures">
        <SunsetAndTemperatures />
      </div>
      <div className="hourly-forecast">
        <Forecast />
      </div>
      <div className="weekly-forecast">
        <Forecast />
      </div>
    </div> 
  );
}

export default App;

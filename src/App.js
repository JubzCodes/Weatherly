import './App.css';
import Search from './components/Search';
import DateAndTime from './components/DateAndTime';
import CityAndWeather from './components/CityAndWeather';
import FeelsAndTemperature from './components/FeelsAndTemperature';
import SunsetAndTemperatures from './components/SunsetAndTemperatures'
import Forecast from './components/Forecast';
import { useEffect, useState } from 'react';
import getFormattedWeather from './helpers';

function App() {

  //STATES FOR WEATHER
  const [query, setQuery] = useState({q: "toronto"});
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);


  //HANDLE API CALL

  useEffect(() => {

    const getWeather = async () => {
      await getFormattedWeather({...query, units}).then((data) => {
        setWeather(data);
        console.log(weather);
      })
    }
    
    getWeather();

  }, [query, units])


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
        {weather && (
          <DateAndTime weather={weather} />
        )}
        </div>
        {weather && (
        <div className="city-and-weather">
          <CityAndWeather weather={weather} />
        </div>
        )}
      </div>
      {weather && (
        <>
      <div className="feels-and-temperature">
        <FeelsAndTemperature weather={weather} />
      </div>
      <div className="sunset-and-temperatures">
        <SunsetAndTemperatures weather={weather}/>
      </div>
      <div className="hourly-forecast">
        <Forecast />
      </div>
      <div className="weekly-forecast">
        <Forecast />
      </div>
        </>
      )}
    </div> 
  );
}

export default App;

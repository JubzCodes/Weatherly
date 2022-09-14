import './App.css';
import Search from './components/Search';
import DateAndTime from './components/DateAndTime';
import CityAndWeather from './components/CityAndWeather';
import FeelsAndTemperature from './components/FeelsAndTemperature';
import SunsetAndTemperatures from './components/SunsetAndTemperatures'
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
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

  
  const max = units === "metric" ? 20 : 60;

  return (
    <div
      className="App"
      style={
        weather && weather.temp <= max
          ? {
              backgroundImage: "linear-gradient(160deg, #000fdf, #09C6F9)",
            }
          : { backgroundImage: "linear-gradient(160deg, red, yellow)" }
      }
    >
      <h1 className="title">WEATHERLY</h1>
      <div className="links">
        <span
          title="Check Weather"
          className="link"
          onClick={() => setQuery({ q: "vancouver" })}
        >
          Vancouver
        </span>
        <span
          title="Check Weather"
          className="link"
          onClick={() => setQuery({ q: "niagara" })}
        >
          Niagara
        </span>
        <span
          title="Check Weather"
          className="link"
          onClick={() => setQuery({ q: "toronto" })}
        >
          Toronto
        </span>
        <span
          title="Check Weather"
          className="link"
          onClick={() => setQuery({ q: "montreal" })}
        >
          Montreal
        </span>
        <span
          title="Check Weather"
          className="link"
          onClick={() => setQuery({ q: "ottawa" })}
        >
          Ottawa
        </span>
      </div>
      <div className="search-and-city">
        <div className="search-time">
          <Search setQuery={setQuery} />
          {weather && <DateAndTime weather={weather} />}
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
            <FeelsAndTemperature
              weather={weather}
              units={units}
              setUnits={setUnits}
            />
          </div>
          <div className="sunset-and-temperatures">
            <SunsetAndTemperatures weather={weather} />
          </div>
          <div className="hourly-forecast">
            <HourlyForecast weather={weather.hourly} />
          </div>
          <div className="daily-forecast">
            <DailyForecast weather={weather.daily} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

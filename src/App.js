import './App.css';
import Search from './components/Search';
import DateAndTime from './components/DateAndTime';
import CityAndWeather from './components/CityAndWeather';
import FeelsAndTemperature from './components/FeelsAndTemperature';
import SunsetAndTemperatures from './components/SunsetAndTemperatures'
import Forecast from './components/Forecast';
import { useEffect } from 'react'

function App() {


  useEffect(() => {

    const getWeather = (endpoint, searchParams) => {
      const url = new URL(
        "https://api.openweathermap.org/data/2.5/"+ endpoint
      );
      url.search = new URLSearchParams({
        ...searchParams,
        appid: "0be1143e55cbb02debda50a86cce2e12",
      });
      return fetch(url).then((res) => console.log(res.json()));
    };

    getWeather("weather", {q: "toronto"});
  })


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

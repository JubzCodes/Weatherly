import './App.css';

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
        <div className="search">
          <div className="search-div">
            <input className="search-bar"></input>
            <button>serach</button>
            <button>location</button>
          </div>
          <span>date & time</span>
        </div>
        <div className="city">
          <h1>City</h1>
          <div>
            <span>icon</span>
            <span>Wetaher</span>
          </div>
        </div>
      </div>
      <div className="temperature">
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

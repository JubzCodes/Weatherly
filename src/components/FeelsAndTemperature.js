import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperature3, faDroplet, faWind
} from "@fortawesome/free-solid-svg-icons";

const FeelsAndTemperature = () => {
  return (
    <div className="feels-temperature">
      <div className="feels">
        <span> <FontAwesomeIcon icon={faTemperature3}></FontAwesomeIcon> Feels like: 10</span>
        <span> <FontAwesomeIcon icon={faDroplet}></FontAwesomeIcon> Humidity: 20</span>
        <span> <FontAwesomeIcon icon={faWind}></FontAwesomeIcon> Wind: 5 mph</span>
      </div>
      <div>
        <h1>86°C</h1>
        <div className="units">
          <span>°C</span>{" "}|{" "}
          <span>°F</span>
        </div>
      </div>
    </div>
  );
}

export default FeelsAndTemperature
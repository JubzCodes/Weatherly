import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperature3, faDroplet, faWind
} from "@fortawesome/free-solid-svg-icons";

const FeelsAndTemperature = ({weather: {temp, feels_like, humidity, speed}}) => {
  return (
    <div className="feels-temperature">
      <div className="feels">
        <span>
          {" "}
          <FontAwesomeIcon icon={faTemperature3}></FontAwesomeIcon> Feels like:{" "}
          {`${feels_like.toFixed()}`}°
        </span>
        <span>
          {" "}
          <FontAwesomeIcon icon={faDroplet}></FontAwesomeIcon> Humidity:{" "}
          {`${humidity.toFixed()}`}%
        </span>
        <span>
          {" "}
          <FontAwesomeIcon icon={faWind}></FontAwesomeIcon> Wind:{" "}
          {`${speed.toFixed()}`} km/h
        </span>
      </div>
      <div className="temp">
        <h1>{`${temp.toFixed()}`}°</h1>
        <div className="units">
          <span>°C</span>|<span>°F</span>
        </div>
      </div>
    </div>
  );
}

export default FeelsAndTemperature
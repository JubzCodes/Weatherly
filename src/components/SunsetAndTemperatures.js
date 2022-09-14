import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faTemperatureHigh,
  faTemperatureLow
} from "@fortawesome/free-solid-svg-icons";
import { localTime } from '../helpers';

const SunsetAndTemperatures = ({weather: {sunrise, sunset, temp_max, temp_min, timezone}}) => {
  return (
    <div className="sunset-temperatures">
      <span>
        {" "}
        <FontAwesomeIcon icon={faSun}></FontAwesomeIcon> Rise:{" "}
        <span className="number">
          {localTime(sunrise, timezone, "hh:mm a")}
        </span>
      </span>
      <span>|</span>
      <span>
        <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon> Set:{" "}
        <span className="number">{localTime(sunset, timezone, "hh:mm a")}</span>
      </span>
      <span>|</span>
      <span>
        {" "}
        <FontAwesomeIcon icon={faTemperatureHigh}></FontAwesomeIcon> High:{" "}
        <span className="number">{`${temp_max.toFixed()}°`}</span>
      </span>
      <span>|</span>
      <span>
        <FontAwesomeIcon icon={faTemperatureLow}></FontAwesomeIcon> Low:{" "}
        <span className="number">{`${temp_min.toFixed()}°`}</span>
      </span>
    </div>
  );
}

export default SunsetAndTemperatures
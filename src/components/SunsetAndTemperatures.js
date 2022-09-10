import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faTemperatureHigh,
  faTemperatureLow
} from "@fortawesome/free-solid-svg-icons";

const SunsetAndTemperatures = () => {
  return (
    <div className="sunset-temperatures">
      <span>
        {" "}
        <FontAwesomeIcon icon={faSun}></FontAwesomeIcon> Rise
      </span>
      <span>
        {" "}
        <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon> Set
      </span>
      <span>
        {" "}
        <FontAwesomeIcon icon={faTemperatureHigh}></FontAwesomeIcon> High
      </span>
      <span>
        {" "}
        <FontAwesomeIcon icon={faTemperatureLow}></FontAwesomeIcon> Low
      </span>
    </div>
  );
}

export default SunsetAndTemperatures
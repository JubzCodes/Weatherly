import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperature3, faDroplet, faWind
} from "@fortawesome/free-solid-svg-icons";

const FeelsAndTemperature = ({weather: {temp, feels_like, humidity, speed}, units, setUnits}) => {

    //TOGGLE STATE
    const [selected, setSelected] = useState(false);

    //HANDLE UNIT CHANGE
    useEffect(() => {
      
      if(!selected) {
        setUnits("metric")
      }

      if(selected) {
        setUnits("imperial")
      }


    },[selected, setUnits])


  console.log(selected)
  

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
          <div className="toggle-button-cover">
            <div className="button-cover">
              <div
                className="button r"
                id="button-1"
              >
                <input
                  type="checkbox"
                  className="checkbox"
                  name="imperial"
                  onClick={() => setSelected(selected ? false : true)}
                />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeelsAndTemperature
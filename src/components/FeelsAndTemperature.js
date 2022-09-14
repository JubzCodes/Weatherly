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
          <span className="number">{`${feels_like.toFixed()}`}°</span>
        </span>
        <span>
          {" "}
          <FontAwesomeIcon icon={faDroplet}></FontAwesomeIcon> Humidity:{" "}
          <span className="number">{`${humidity.toFixed()}`}%</span>
        </span>
        <span>
          {" "}
          <FontAwesomeIcon icon={faWind}></FontAwesomeIcon> Wind:{" "}
          <span className="number">{`${speed.toFixed()}`} km/h</span>
        </span>
      </div>
      <div className="temp">
        <h1 className="temp-title">{`${temp.toFixed()}`}°</h1>
        <div className="units">
          <div className="toggle-button-cover">
            <div className="button-cover">
              <div className="button r" id="button-1" title="Toggle Unit">
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
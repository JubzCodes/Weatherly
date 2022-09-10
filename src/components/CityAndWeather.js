import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud
} from "@fortawesome/free-solid-svg-icons";

const CityAndWeather = () => {
  return (
    <div className='city-and-weather'>
      <h1>Toronto</h1>
      <div>
        <FontAwesomeIcon icon={faCloud}/>
        <h5>Clouds</h5>
      </div>
    </div>
  )
}

export default CityAndWeather
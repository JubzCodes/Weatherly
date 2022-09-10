import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud
} from "@fortawesome/free-solid-svg-icons";

const CityAndWeather = () => {
  return (
    <div className='city-weather'>
      <h1>Toronto</h1>
      <div>
        <FontAwesomeIcon icon={faCloud} size="4x"/>
        <h2>Clouds</h2>
      </div>
    </div>
  )
}

export default CityAndWeather
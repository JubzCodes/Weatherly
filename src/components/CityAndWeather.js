import React from 'react'


const CityAndWeather = ({weather : { name, country, details, icon}}) => {

  let url = `http://openweathermap.org/img/wn/${icon}@2x.png`

  return (
    <div className='city-weather'>
      <h1 className='city-title'>{`${name}, ${country}`}</h1>
      <div>
        <img alt='' src={url}></img>
        <h2>{details}</h2>
      </div>
    </div>
  )
}

export default CityAndWeather
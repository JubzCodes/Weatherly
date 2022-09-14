import React from 'react'

const HourlyForecast = ({weather}) => {
  
  console.log(weather)

  //HANDLE ICON FROM API
  const getIcon = (icon) => {
    let url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return url;
  }

  return (
    <>
      <h2 className='hourly-title'>Hourly Forecast</h2>
      <div className="cards-wrap">

      {weather.map((hour, index) => {
        return(
        <div key={index} className="card">
          <span>{hour.time}</span>
          <img alt="" src={getIcon(hour.icon)}></img>
          <span className='number'>{`${hour.temp.toFixed()}°`}</span>
        </div>
        )
      })}

      </div>
    </>
  );
}

export default HourlyForecast
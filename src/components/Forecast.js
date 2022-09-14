import React from 'react'

const Forecast = ({weather}) => {
  
  console.log(weather)

  //HANDLE ICON FROM API
  const getIcon = (icon) => {
    let url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return url;
  }

  return (
    <div>
      <h2>Hourly Forcast</h2>
      <div className="cards-wrap">

      {weather.map((hour, index) => {
        return(
        <div key={index} className="card">
          <span>{hour.title}</span>
          <img alt="" src={getIcon(hour.icon)}></img>
          <span>{`${hour.temp.toFixed()}°`}</span>
        </div>
        )
      })}

      </div>
    </div>
  );
}

export default Forecast
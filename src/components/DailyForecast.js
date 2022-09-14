import React from 'react'

const DailyForecast = ({weather}) => {

  console.log(weather);

  //HANDLE ICON FROM API
  const getIcon = (icon) => {
    let url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return url;
  };

  return (
    <div>
      <h2>Daily Forcast</h2>
      <div className="cards-wrap">
        {weather.map((day, index) => {
          return (
            <div key={index} className="card">
              <span>{day.day}</span>
              <img alt="" src={getIcon(day.icon)}></img>{" "}
              <span>Morning: {`${day.temp_morn.toFixed()}°`}</span>
              <span>Day: {`${day.temp_day.toFixed()}°`}</span>
              <span>Night: {`${day.temp_night.toFixed()}°`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DailyForecast
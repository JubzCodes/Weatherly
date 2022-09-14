import React from 'react'

const DailyForecast = ({weather}) => {

  console.log(weather);

  //HANDLE ICON FROM API
  const getIcon = (icon) => {
    let url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return url;
  };

  return (
    <>
      <h2 className='daily-title'>Daily Forecast</h2>
      <div className="cards-wrap">
        {weather.map((day, index) => {
          return (
            <div key={index} className="card">
              <span>{day.day}</span>
              <img alt="" src={getIcon(day.icon)}></img>{" "}
              <div className="daily-temps">
                <span>
                  Morning:{" "}
                  <span className="number">{`${day.temp_morn.toFixed()}°`}</span>
                </span>
                <span>
                  Day:{" "}
                  <span className="number">{`${day.temp_day.toFixed()}°`}</span>
                </span>
                <span>
                  Night:{" "}
                  <span className="number">{`${day.temp_night.toFixed()}°`}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DailyForecast
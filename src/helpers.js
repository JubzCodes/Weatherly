// HANDLE API
const fetchWeather = (endpoint, searchParams) => {
  const url = new URL("https://api.openweathermap.org/data/2.5/" + endpoint);

  url.search = new URLSearchParams({
    ...searchParams,
    appid: "0be1143e55cbb02debda50a86cce2e12",
  });

  return fetch(url).then((res) => res.json().then((data) => data));
};


// HANDLE DESTRUCTURE OF WEATHERAPI DATA
const formatWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const localTime = (
  seconds,
  timezone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(seconds).setZone(timezone).toFormat(format);

// HANDLE DESTRUCTURE OF FORECAST WETAHER API
const formatForecast = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((d) => {
    return {
      title: localTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });

  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: localTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
}

//HANDLE WEATHER API CALL
const getFormattedWeather = async (searchParams) => {

  const formattedWeather = await fetchWeather("weather", searchParams).then(
    formatWeather
  );

  const { lon, lat } = formattedWeather 
  
  //CALL FORECAST API
  const formattedForecast = await fetchWeather("onecall", { 
    lon, lat, 
    exclude: "current, minutely, alerts",
    units: searchParams.units}).then(formatForecast);

    return {...formattedWeather, ...formattedForecast};
};

//HANDLE ICON
const getIcon = (data) => {
  `http://openweathermap.org/img/wn/${data}@2x.png`;
}

export default getFormattedWeather; 

export { localTime, getIcon }
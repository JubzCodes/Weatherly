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

//HANDLE WEATHER API CALL
const getFormattedWeather = async (searchParams) => {
  const formattedWeather = await fetchWeather("weather", searchParams).then(
    formatWeather
  );
  return formattedWeather;
};

export default getFormattedWeather;
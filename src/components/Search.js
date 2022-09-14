import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Search = ({ setQuery }) => {

  //CITY STATE
  const [city, setCity] = useState('');

  //HANDLE SEARCH
  const handleSearch = (e) => {
    if(e.key === "Enter") {
      if (city !== "") {
        setQuery({ q: city });
      }
    }
  }

  //HANDLE USER LOCATION
  const handleLocation = () => {
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition((position) => {
        let lon = position.coords.longitude;
        let lat = position.coords.latitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className='search'>
      <input
      className='search-bar'
      type="text"
      placeholder='Search a City...'
      value={city}
      onChange={(e)=> setCity(e.target.value)}
      autoFocus
      onKeyPress={handleSearch}
      ></input>
      <div className='search-icons'>
      <FontAwesomeIcon className='location-icon' title='Location' icon={faLocationDot} size="xl" onClick={handleLocation}></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default Search
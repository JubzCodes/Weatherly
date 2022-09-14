import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Search = ({ setQuery }) => {

  //CITY STATE
  const [city, setCity] = useState('');

  const handleSearch = (e) => {
    if(e.key === "Enter") {
      if (city !== "") {
        setQuery({ q: city });
      }
    }
  }

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
      <FontAwesomeIcon title='Location' icon={faLocationDot} size="xl"></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default Search
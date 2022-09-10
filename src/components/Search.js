import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

const Search = () => {

  //CITY STATE
  const [city, setCity] = useState('');

  return (
    <div>
      <input 
      className='search-bar'
      type="text"
      placeholder='Search a City...'
      value={city}
      onChange={(e)=> setCity(e.target.value)}
      autoFocus
      ></input>
      <div>
      <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faMagnifyingGlassLocation}></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default Search
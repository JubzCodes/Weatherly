import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

const Search = () => {

  //CITY STATE
  const [city, setCity] = useState('');

  return (
    <div className='search'>
      <input
      className='search-bar'
      type="text"
      placeholder='Search a City...'
      value={city}
      onChange={(e)=> setCity(e.target.value)}
      autoFocus
      ></input>
      <div className='search-icons'>
      <FontAwesomeIcon title='Search' icon={faMagnifyingGlass} size="xl"></FontAwesomeIcon>
      <FontAwesomeIcon title='Location' icon={faMagnifyingGlassLocation} size="xl"></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default Search
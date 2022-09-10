import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const Forecast = () => {
  return (
    <div>
      <h2>Forcast</h2>
      <div className="cards-wrap">
        <div className="card">
          <span>5:00am</span>
          <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>
          <span>47°</span>
        </div>
        <div className="card">
          <span>6:00am</span>
          <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>
          <span>47°</span>
        </div>
        <div className="card">
          <span>7:00am</span>
          <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>
          <span>47°</span>
        </div>
        <div className="card">
          <span>8:00am</span>
          <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>
          <span>47°</span>
        </div>
        <div className="card">
          <span>9:00am</span>
          <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>
          <span>47°</span>
        </div>
      </div>
    </div>
  );
}

export default Forecast
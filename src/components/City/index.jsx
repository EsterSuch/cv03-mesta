import React from 'react';
import './style.css';


const City = ({name, population, area, district, photo}) => {
  return (
  <>
  <div className="city">
    <div>
      <h2> {name}</h2>
      <p>Počet obyvatel: {population}</p>
      <p>Rozloha: {area} km2 </p>
      <p>Okres: {district} </p>
    </div>
  
    <div className="city__photo">
       <img src={photo}/>
    </div>
  </div>
  </> 
  )
};

export default City;
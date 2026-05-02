import React, { useState } from "react";
import './Country.css'

const Country = ({ country ,handleVisitedCountries}) => {
  // console.log(country);
  // console.log(handleVisitedCountries)
 
  const [visited,setVisited] = useState(false)

  const handleVisite=()=>{
    setVisited(true)
    // if(visited){
    //   setVisited(false)
    // }else{
    //   setVisited(true)
    // }
    // setVisited(visited?false:true)
    // setVisited(!visited)
    handleVisitedCountries(country)
  }
 
  return (
    <div className={`countryA ${visited && 'countryA-visited'}`}>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
      <h2 className="text">Name : {country.name.common} </h2>
      <p>Population : {country.population.population}</p>
      <p>Language : {country.languages.languages.eng}</p>
      <h6>Area: {country.area.area} {country.area.area>30000? "Big Country":"Small Country"}</h6>
      <button onClick={handleVisite}>{visited? 'Visited':"Not visited"}</button>
    </div>
  );
}; 

export default Country;

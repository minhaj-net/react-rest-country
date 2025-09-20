import React, { useState } from "react";
import "./country.css";

const Country = ({ country, HandlerVisitedCountries, handleVisitedFlag }) => {
  // console.log(HandlerVisitedCountries);
  // console.log(country.area);
  const countriseName = country.name.common;
  const flags = country.flags.flags.png;
  const continents = country.continents.continents[0];
  const area = country.area.area;
  // console.log(area);
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    // frist way
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // Second way
    // setVisited(visited ? false : true);

    // Third way
    setVisited(!visited);
    HandlerVisitedCountries(country);
  };
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img className="countryImage" src={flags} alt={country.flags.flags.alt} />
      <div className="coumtryInfo">
        <h3>Name: {countriseName}</h3>
        <h3>Continentd: {continents}</h3>
        <p>Area : {area > 200000 ? "Largest Country" : "Small Country"}</p>
      </div>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not  Visited"}
      </button>
      <button
        onClick={() => {
          handleVisitedFlag(flags);
        }}
      >
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;

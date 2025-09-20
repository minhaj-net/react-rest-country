import React, { use, useState } from "react";
import Country from "../country/Country";
import "./countries.css";

const Countries = ({ countryPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const HandlerVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    console.log(newVisitedCountries);
    setVisitedCountries(newVisitedCountries);
  };

  const [visitedFLags, setVisitedFlags] = useState([]);
  const handleVisitedFlag = (flags) => {
    console.log("Add visited Flag button clicked ", flags);
    const newVisitedFlags = [...visitedFLags, flags];
    setVisitedFlags(newVisitedFlags);
  };
  const countriesData = use(countryPromise);
  const countries = countriesData.countries;
  return (
    <>
      <h1>In the Countries :{countries.length} </h1>
      <h3>Total Countries Visited:{visitedCountries.length} </h3>
      <h2>Total visited flags : {visitedFLags.length}</h2>
      <div className="visited-flag-cointainer">
        {visitedFLags.map((flag, i) => (
          <img key={i} src={flag}></img>
        ))}
      </div>
      <ol>
        {visitedCountries.map((countryInfo) => (
          <li>{countryInfo.name.common}</li>
        ))}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            handleVisitedFlag={handleVisitedFlag}
            key={country.cca3.cca3}
            HandlerVisitedCountries={HandlerVisitedCountries}
            country={country}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;

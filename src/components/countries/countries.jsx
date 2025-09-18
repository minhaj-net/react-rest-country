import React, { use } from "react";
import Country from "../country/Country";
import "./countries.css";

const Countries = ({ countryPromise }) => {
  const countriesData = use(countryPromise);
  const countries = countriesData.countries;
  return (
    <div className="countries">
      {countries.map((country) => (
        <Country key={country.cca3.cca3} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;

import React, { useContext } from "react";
import StatContext from "../../../context/stat/statContext";
import * as countries from "../../../data/countries.json";

const CountryItem = ({ country }) => {
  const statContext = useContext(StatContext);
  const { setCurrent, current } = statContext;

  const { Country, TotalConfirmed, TotalDeaths, TotalRecovered } = country;

  const setCurrentHandler = country => {
    const current = [country];

    const test = countries.features.filter(
      item => item.name === country.Country
    );

    current.latlng = test[0].latlng;

    setCurrent(current);
  };

  return (
    <div
      className={`country ${
        current !== null && current[0].Country === Country ? "current" : ""
      }`}
      onClick={() => setCurrentHandler(country)}
    >
      <h3 className="country-name">{Country}</h3>
      <div className="data">
        <div className="box">
          <h4>Confirmed</h4>
          <span>{TotalConfirmed}</span>
        </div>
        <div className="box">
          <h4>Recovered</h4>
          <span>{TotalRecovered}</span>
        </div>
        <div className="box">
          <h4>Deaths</h4>
          <span>{TotalDeaths}</span>
        </div>
      </div>
    </div>
  );
};

export default CountryItem;

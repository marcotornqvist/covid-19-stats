import React, { useContext } from "react";
import StatContext from "../../../context/stat/statContext";
import CountryItem from "./CountryItem";

const Countries = () => {
  const statContext = useContext(StatContext);
  const { stats, loading, filtered } = statContext;

  // let sorted;

  // // The objects will still remain sorted despite objects being filtered or not
  // if (stats !== null && !loading) {
  //   sorted = stats.sort((x, y) => y.TotalConfirmed - x.TotalConfirmed);
  // }

  return (
    <div className="countries">
      {stats !== null && !loading ? (
        filtered !== null ? (
          filtered.map((country, index) => (
            <CountryItem country={country} key={index} />
          ))
        ) : (
          stats.map((country, index) => (
            <CountryItem country={country} key={index} />
          ))
        )
      ) : (
        <h3 className="loading">Loading...</h3>
      )}
    </div>
  );
};

export default Countries;

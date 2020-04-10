import React, { useContext, useRef, useEffect } from "react";
import StatContext from "../../../context/stat/statContext";

const StatFilter = () => {
  const statContext = useContext(StatContext);
  const text = useRef("");

  const { filterStats, clearFilter, filtered } = statContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      filterStats(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form className="filter">
      <div className="search">
        <i className="fas fa-search-location"></i>
        <input
          ref={text}
          type="text"
          placeholder="Filter by Country"
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default StatFilter;

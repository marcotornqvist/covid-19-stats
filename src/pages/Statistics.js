import React, { useEffect, useContext } from "react";
import Menu from "../components/statistics/Menu";
import Visuals from "../components/statistics/Visuals";
import StatContext from "../context/stat/statContext";

const Statistics = () => {
  const statContext = useContext(StatContext);
  const { getStats } = statContext;

  useEffect(() => {
    getStats();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="statistics">
      <Menu />
      <Visuals />
    </div>
  );
};

export default Statistics;

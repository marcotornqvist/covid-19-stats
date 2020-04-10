import React from "react";
import Modes from "./menu/Modes";
import StatFilter from "./menu/StatFilter";
import Countries from "./menu/Countries";

const Menu = () => {
  return (
    <div className="menu">
      <Modes />
      <StatFilter />
      <Countries />
    </div>
  );
};

export default Menu;

import React, { useReducer } from "react";
import axios from "axios";
import StatContext from "./statContext";
import statReducer from "./statReducer";
import {
  GET_STATS,
  CHANGE_MODE,
  FILTER_STATS,
  CLEAR_FILTER,
  SET_CURRENT
} from "../types";

const StatState = props => {
  const initialState = {
    stats: null,
    filtered: null,
    activeMode: 2,
    loading: true,
    current: null
  };

  const [state, dispatch] = useReducer(statReducer, initialState);

  // Get Statistics
  const getStats = async () => {
    const result = await axios("https://api.covid19api.com/summary");

    dispatch({
      type: GET_STATS,
      payload: result.data.Countries
    });
  };

  // Change between modes
  const changeMode = mode => {
    dispatch({
      type: CHANGE_MODE,
      payload: mode
    });
  };

  // Filter Statistics
  const filterStats = text => {
    dispatch({
      type: FILTER_STATS,
      payload: text
    });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // Set Current Country
  const setCurrent = current => {
    dispatch({
      type: SET_CURRENT,
      payload: current
    });
  };

  return (
    <StatContext.Provider
      value={{
        stats: state.stats,
        modes: state.modes,
        filtered: state.filtered,
        loading: state.loading,
        current: state.current,
        getStats,
        changeMode,
        filterStats,
        clearFilter,
        setCurrent
      }}
    >
      {props.children}
    </StatContext.Provider>
  );
};

export default StatState;

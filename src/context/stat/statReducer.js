import {
  GET_STATS,
  CHANGE_MODE,
  FILTER_STATS,
  CLEAR_FILTER,
  SET_CURRENT
  // SET_SELECTED_COUNTRY
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_STATS:
      return {
        ...state,
        stats: action.payload.filter(item => {
          const valuesToRemove = [
            "",
            "occupied Palestinian territory",
            "Iran (Islamic Republic of)",
            "Republic of Korea",
            "Korea, South",
            "Russian Federation",
            "Taiwan*",
            "Viet Nam",
            "Bahamas, The",
            "The Bahamas",
            "North Ireland",
            "Republic of Ireland",
            "ALA Aland Islands"
          ];
          return !valuesToRemove.includes(item.Country);
        }),
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CHANGE_MODE:
      return {
        ...state,
        activeMode: action.payload
      };
    case FILTER_STATS:
      return {
        ...state,
        filtered: state.stats.filter(item => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return item.Country.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    default:
      return state;
  }
};

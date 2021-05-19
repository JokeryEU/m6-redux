import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favourites: state.favourites.filter((i) => i.id !== action.payload),
      };

    default:
      return state;
  }
};

export default mainReducer;

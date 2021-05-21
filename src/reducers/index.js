import { initialState } from "../store";

const favReducer = (state = initialState.favourites, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.payload],
      };
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favoriteList: state.favoriteList.filter((i) => i.id !== action.payload),
      };

    default:
      return state;
  }
};

export default favReducer;

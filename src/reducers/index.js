import { initialState } from "../store";

const increment = "INCREMENT";
const decrement = "DECREMENT";

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case decrement:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

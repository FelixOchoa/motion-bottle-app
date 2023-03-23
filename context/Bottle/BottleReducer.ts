import { SET_DURATION } from "../types";

export const BottleReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_DURATION:
      return {
        ...state,
        duration: action.payload,
      };
    default:
      return state;
  }
};

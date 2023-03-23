import { SET_DURATION, SET_TIMEOUT } from "../types";

export const BottleReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_DURATION:
      return {
        ...state,
        duration: action.payload,
      };

    case SET_TIMEOUT:
      return {
        ...state,
        durationTimeout: action.payload,
      };

    default:
      return state;
  }
};

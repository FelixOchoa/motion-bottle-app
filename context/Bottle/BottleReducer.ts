import { SET_DISABLE_FORM, SET_DURATION } from "../types";

export const BottleReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_DURATION:
      return {
        ...state,
        duration: action.payload,
      };
    case SET_DISABLE_FORM:
      return {
        ...state,
        disableForm: action.payload,
      };
    default:
      return state;
  }
};

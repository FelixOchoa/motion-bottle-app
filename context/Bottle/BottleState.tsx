import { useEffect, useReducer } from "react";
import { BottleReducer } from "./BottleReducer";
import BottleContext from "./BottleContext";
import { SET_DISABLE_FORM, SET_DURATION } from "../types";

export const BottleState = (props: any) => {
  const bottleState = {
    disableForm: false,
    durationVideo: 35,
    duration: 35,
  };

  const [state, dispatch] = useReducer(BottleReducer, bottleState);

  const setDisableForm = (disableForm: boolean) => {
    dispatch({
      type: SET_DISABLE_FORM,
      payload: disableForm,
    });
  };

  const setDuration = (duration: number) => {
    dispatch({
      type: SET_DURATION,
      payload: duration,
    });
  };

  useEffect(() => {
    localStorage.setItem("duration", state.duration.toString());
  }, [state.duration]);

  return (
    <BottleContext.Provider
      value={
        {
          disableForm: state.disableForm,
          duration: state.duration,
          durationVideo: state.durationVideo,
          setDisableForm,
          setDuration,
        } as any
      }
    >
      {props.children}
    </BottleContext.Provider>
  );
};

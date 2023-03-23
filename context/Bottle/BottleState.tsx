import { useEffect, useReducer } from "react";
import { BottleReducer } from "./BottleReducer";
import BottleContext from "./BottleContext";
import { SET_DURATION } from "../types";

export const BottleState = (props: any) => {
  const bottleState = {
    durationVideo: 35,
    duration: 60,
  };

  const [state, dispatch] = useReducer(BottleReducer, bottleState);

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
          setDuration,
        } as any
      }
    >
      {props.children}
    </BottleContext.Provider>
  );
};

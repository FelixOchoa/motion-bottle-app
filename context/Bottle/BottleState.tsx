import { useEffect, useReducer } from "react";
import { BottleReducer } from "./BottleReducer";
import BottleContext from "./BottleContext";
import { SET_DURATION, SET_TIMEOUT } from "../types";

export const BottleState = (props: any) => {
  const bottleState = {
    durationVideo: 35,
    duration: 35,
    durationTimeout: 15,
  };

  const [state, dispatch] = useReducer(BottleReducer, bottleState);

  const setDuration = (duration: number) => {
    dispatch({
      type: SET_DURATION,
      payload: duration,
    });
    localStorage.setItem("duration", duration.toString());
  };

  const setTimeOut = (duration: number) => {
    dispatch({
      type: SET_TIMEOUT,
      payload: duration,
    });
    localStorage.setItem("timeOut", duration.toString());
  };

  useEffect(() => {
    if (!localStorage.getItem("duration") || !localStorage.getItem("timeOut")) {
      localStorage.setItem("duration", state.duration.toString());
      localStorage.setItem("timeOut", state.durationTimeout.toString());
    } else {
      setDuration(parseInt(localStorage.getItem("duration") || "60"));
      setTimeOut(parseInt(localStorage.getItem("timeOut") || "15"));
    }
  }, [state.duration || state.durationTimeout]);

  return (
    <BottleContext.Provider
      value={
        {
          duration: state.duration,
          durationVideo: state.durationVideo,
          durationTimeout: state.durationTimeout,
          setDuration,
          setTimeOut,
        } as any
      }
    >
      {props.children}
    </BottleContext.Provider>
  );
};

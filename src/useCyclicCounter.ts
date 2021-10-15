import { useState } from "react";

interface CyclicCounterHook {
  val: number;
  inc: (num?: number) => void;
  dec: (num?: number) => void;
  set: (newState: number) => void;
}

interface CyclicCounterState {
  val?: number;
  upperBound: number;
}

export const useCyclicCounter = (
  initialState: CyclicCounterState
): CyclicCounterHook => {
  const [state, setState] = useState<number>(initialState.val || 0);

  const inc = (num: number = 1) => {
    setState((state + num) % initialState.upperBound);
  };

  const dec = (num: number = 1) => {
    setState((state - num) % initialState.upperBound);
  };

  const set = (newState: number) => {
    setState(newState % initialState.upperBound);
  };

  return {
    val: state,
    inc,
    dec,
    set,
  };
};

import { useState } from "react";

interface CyclicCounterHook {
  val: number;
  inc: (num?: number) => void;
  dec: (num?: number) => void;
  set: (newState: number) => void;
}

interface CyclicCounterOptions {
  upperBound: number;
  step?: number;
  val?: number;
}

export const useCyclicCounter = (
  initialState: CyclicCounterOptions
): CyclicCounterHook => {
  const val = initialState.val || 0;
  const step = initialState.step || 1;

  const [state, setState] = useState<number>(val);

  const inc = (num: number = step) => {
    setState((state + num) % initialState.upperBound);
  };

  const dec = (num: number = step) => {
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

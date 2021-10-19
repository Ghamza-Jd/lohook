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
  const iState: CyclicCounterOptions = { val: 0, step: 1, ...initialState };

  const [state, setState] = useState<number>(iState.val!);

  const inc = (num: number = iState.step!) => {
    setState((state + num) % initialState.upperBound);
  };

  const dec = (num: number = iState.step!) => {
    const newState = (state - num) % initialState.upperBound;
    setState(newState > 0 ? newState : initialState.upperBound - 1);
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

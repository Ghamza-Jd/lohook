import { useState } from "react";

interface CyclicNumberHook {
  val: number;
  inc: (num?: number) => void;
  dec: (num?: number) => void;
  set: (newState: number) => void;
}

interface CyclicNumberState {
  val?: number;
  upperBound: number;
}

export const useCyclicNumber = (
  initialState: CyclicNumberState
): CyclicNumberHook => {
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

import { useState } from "react";

interface CounterHook {
  val: number;
  inc: (num?: number) => void;
  dec: (num?: number) => void;
  set: (newState: number) => void;
}

interface CounterState {
  val?: number;
  step?: number;
}

export const useCounter = (
  initialState: CounterState = {
    val: 0,
    step: 1,
  }
): CounterHook => {
  const [state, setState] = useState<number>(initialState.val!);

  const inc = (num: number = initialState.step!) => {
    setState(state + num);
  };

  const dec = (num: number = initialState.step!) => {
    setState(state - num);
  };

  const set = (newState: number) => {
    setState(newState);
  };

  return {
    val: state,
    inc,
    dec,
    set,
  };
};

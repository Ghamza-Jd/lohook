import { useState } from "react";

interface NumberHook {
  val: number;
  inc: (num?: number) => void;
  dec: (num?: number) => void;
  set: (newState: number) => void;
}

export const useNumber = (initialState = 0): NumberHook => {
  const [state, setState] = useState<number>(initialState);

  const inc = (num: number = 1) => {
    setState(state + num);
  };

  const dec = (num: number = 1) => {
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

import { useState } from "react";

interface BoolHook {
  val: boolean;
  toggle: () => void;
  set: (newState: boolean) => void;
}

export const useBool = (initialState = false): BoolHook => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = () => {
    setState(!state);
  };

  const set = (newState: boolean) => {
    setState(newState);
  };

  return {
    val: state,
    toggle,
    set,
  };
};

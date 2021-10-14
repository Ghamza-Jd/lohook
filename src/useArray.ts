import { useState } from "react";

interface ArrayHook<T> {
  val: T[];
  push: (...items: T[]) => number;
  pop: () => T | undefined;
}

export const useArray = <T>(initialState: T[]): ArrayHook<T> => {
  const [state, setState] = useState<T[]>(initialState);

  // shift, unshift, join, split, splice, slice, indexOf, lastIndexOf, includes, reverse
  // filter, find, some, every, sort, forEach, filter, map, reduce

  const push = (...items: T[]): number => {
    const newState = state;
    const res = newState.push(...items);
    setState(newState);
    return res;
  };

  const pop = (): T | undefined => {
    const newState = state;
    const res = newState.pop();
    setState(newState);
    return res;
  };

  return {
    val: state,
    push,
    pop,
  };
};

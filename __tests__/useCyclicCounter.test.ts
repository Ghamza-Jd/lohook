import { renderHook, act } from "@testing-library/react-hooks";

import { useCyclicCounter } from "../src/useCyclicCounter";

test("Should defaults to 0", () => {
  const { result } = renderHook(() => useCyclicCounter({ upperBound: 2 }));

  expect(result.current.val).toBe(0);
});

test("Should defaults to 0 and stay 0", () => {
  const { result } = renderHook(() => useCyclicCounter({ upperBound: 1 }));

  act(() => {
    result.current.inc();
  });

  expect(result.current.val).toBe(0);
});

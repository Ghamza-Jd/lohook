import { renderHook, act } from "@testing-library/react-hooks";

import { useCounter } from "../src/useCounter";

test("Should defaults to 0", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.val).toBe(0);
});

test("Should defaults to 0 and incremented by 1", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.inc();
  });

  expect(result.current.val).toBe(1);
});

test("Should start as 5 and incremented by 2", () => {
  const { result } = renderHook(() => useCounter({ val: 5, step: 2 }));

  expect(result.current.val).toBe(5);

  act(() => {
    result.current.inc();
  });

  expect(result.current.val).toBe(7);
});

import { renderHook, act } from "@testing-library/react-hooks";

import { useBool } from "../src/useBool";

test("Should defaults to false", () => {
  const { result } = renderHook(() => useBool());

  expect(result.current.val).toBe(false);
});

test("Should toggle to true", () => {
  const { result } = renderHook(() => useBool());

  act(() => {
    result.current.toggle();
  });

  expect(result.current.val).toBe(true);
});

test("Should start as true and set to false", () => {
  const { result } = renderHook(() => useBool(true));

  expect(result.current.val).toBe(true);

  act(() => {
    result.current.set(false);
  });

  expect(result.current.val).toBe(false);
});

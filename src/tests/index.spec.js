import { expect, test } from "vitest";
import { sum } from "./sum";

test("adds 1 + 2 to equals 3", () => {
  const result = sum(1, 2);
  const expectedResult = 3;

  expect(result).toBe(expectedResult);
});

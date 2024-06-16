import { describe, expect, test } from "@jest/globals";
import { sum } from "../src";

describe("sum module", () => {
  test("adds 1 +2 equal to 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

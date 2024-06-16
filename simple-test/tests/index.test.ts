import { describe, expect, test } from "@jest/globals";
import { product, sum } from "../src";

describe("sum module", () => {
  test("adds 1 +2 equal to 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
describe("multipley module", () => {
  test("2 multiply by 3 equal to 6", () => {
    expect(product(2, 3)).toBe(6);
  });
});

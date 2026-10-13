import { expect, test } from "bun:test";
import { calculateTip } from "../src/tip.ts";

test("tips a typical bill", () => {
  expect(calculateTip(50, 20)).toEqual({ tip: 10, total: 60 });
});

test("tips nothing at 0%", () => {
  expect(calculateTip(42.5, 0)).toEqual({ tip: 0, total: 42.5 });
});

test("rounds the tip to the nearest cent", () => {
  expect(calculateTip(23.45, 15)).toEqual({ tip: 3.52, total: 26.97 });
});

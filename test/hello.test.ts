import { expect, test } from "bun:test";
import { hello } from "../src/hello.ts";

test("greets by name", () => {
  expect(hello("Ada")).toBe("Hello, Ada!");
});

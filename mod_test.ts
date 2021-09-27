import { assertEquals } from "./test_deps.ts";
import isNumeric, { isNumericSync } from "./mod.ts";

Deno.test("Test isNumeric 1", async () => {
  assertEquals(await isNumeric("hello"), false);
});

Deno.test("Test isNumeric 2", async () => {
  assertEquals(await isNumeric("12"), true);
});

Deno.test("Test isNumericSync 1", () => {
  assertEquals(isNumericSync("12jej"), false);
});

Deno.test("Test isNumericSync 2", () => {
  assertEquals(isNumericSync("12345"), true);
});

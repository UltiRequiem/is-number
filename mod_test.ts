import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { isNumeric } from "./mod.ts";

Deno.test("Text with letter is not numeric.", () => {
  assertEquals(isNumeric("hello"), false);
});

Deno.test("Text with only numbers is numeric.", () => {
  assertEquals(isNumeric("12"), true);
});

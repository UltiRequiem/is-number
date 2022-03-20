/**
 * Check if a string is a valid number.
 *
 * @example
 * ```typescript
 * import { isNumeric } from "https://deno.land/x/is_number/mod.ts";
 *
 * isNumber("hello")); //=> false
 * isNumber("hello8")); //=> false
 * isNumber("678")); //=> true
 * ```
 */
export function isNumber(number: unknown) {
  switch (typeof number) {
    case "number":
      return number - number === 0;
    case "string":
      return number.trim() !== "" && !Number.isNaN(Number(number));
  }

  return false;
}

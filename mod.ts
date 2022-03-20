/**
 * Check if a string is a valid number.
 *
 * @example
 * ```typescript
 * import { isNumeric } from "https://deno.land/x/is_number/mod.ts";
 *
 * isNumeric("hello")); //=> false
 * isNumeric("hello8")); //=> false
 * isNumeric("678")); //=> true
 * ```
 */
export function isNumeric(value: string) {
  return value !== "" && !Number.isNaN(Number(value));
}

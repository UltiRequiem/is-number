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
 * isNumber(345)); //=> true
 * isNumber(5e3); //=> true
 * isNumber(0xff); //=> true
 * isNumber(-1.1); //=> true
 * isNumber(0); //=> true
 * isNumber(1); //=> true
 * isNumber(1.1); //=> true
 * isNumber(10); //=> true
 * isNumber(10.1); //=> true
 * isNumber(100); //=> true
 * isNumber("-1.1"); //=> true
 * isNumber("0"); //=> true
 * isNumber("012"); //=> true
 * isNumber("0xff"); //=> true
 * isNumber("1"); //=> true
 * isNumber("1.1"); //=> true
 * isNumber("10"); //=> true
 * isNumber("10.10"); //=> true
 * isNumber("100"); //=> true
 * isNumber("5e3"); //=> true
 * isNumber(parseInt("012")); //=> true
 * isNumber(parseFloat("012")); //=> true
 * isNumber(Infinity); //=> false
 * isNumber(NaN); //=> false
 * isNumber(null); //=> false
 * isNumber(undefined); //=> false
 * isNumber(''); //=> false
 * isNumber('   '); //=> false
 * isNumber('foo'); //=> false
 * isNumber([1]); //=> false
 * isNumber([]); //=> false
 * isNumber(function () {}); //=> false
 * isNumber({}); //=> false
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

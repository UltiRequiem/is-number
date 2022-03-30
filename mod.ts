/**
 * Check if a value is a valid number.
 *
 * @example
 * ```javascript
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
export function isNumber(input: unknown): input is number {
  switch (typeof input) {
    case "number":
      return input - input === 0;
    case "string":
      return input.trim() !== "" && !Number.isNaN(Number(input));
  }

  return false;
}

/**
 * Asserts a value is a number.
 * Throws an error if the value is not a number.
 *
 * @example
 * ```javascript
 * import { assertIsNumber } from "https://deno.land/x/is_number/mod.ts";
 *
 * assertIsNumber([1]); //=> throws
 * assertIsNumber([]); //=> throws
 * assertIsNumber(function () {}); //=> throws
 * assertIsNumber({}); //=> throws
 * assertIsNumber(1); //=> does not throw
 * ```
 */
export function assertIsNumber(value: unknown): asserts value is number {
  if (!isNumber(value)) {
    throw new TypeError(`Expected value to be a number, got ${typeof value}`);
  }
}

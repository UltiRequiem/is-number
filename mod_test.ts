import {
  assert,
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/testing/asserts.ts";
import { assertIsNumber, isNumber } from "./mod.ts";

Deno.test("Text with letter is not numeric.", () => {
  assertEquals(isNumber("hello"), false);
  assert(isNumber("hello") === false);
  assert(!isNumber("hello"));
});

Deno.test("Text with only numbers is numeric.", () => {
  assert(isNumber("12"));
});

Deno.test("Not Valid Numbers.", () => {
  const fixtures = [
    "   ",
    "\r\n\t",
    "",
    "",
    "3a",
    "abc",
    "false",
    "null",
    "true",
    "undefined",
    +"abc",
    +/foo/,
    +[1, 2, 4],
    +Infinity,
    +Math.sin,
    +NaN,
    // @ts-ignore: <This converts to NaN>
    +undefined,
    +{ a: 1 },
    +{},
    /foo/,
    [1, 2, 3],
    [1],
    [],
    true,
    false,
    +function () {},
    function () {},
    Infinity,
    -Infinity,
    Math.sin,
    NaN,
    new Date(),
    null,
    undefined,
    {},
  ];

  fixtures.forEach((fixture) => {
    assertEquals(isNumber(fixture), false);
  });
});

Deno.test("Valid Numbers.", () => {
  const fixtures = [
    0xff,
    5e3,
    0,
    0.1,
    -0.1,
    -1.1,
    37,
    3.14,

    1,
    1.1,
    10,
    10.1,
    100,
    -100,

    "0.1",
    "-0.1",
    "-1.1",
    "0",
    "012",
    "0xff",
    "1",
    "1.1",
    "10",
    "10.10",
    "100",
    "5e3",
    "   56\r\n  ",

    Math.LN2,

    parseInt("012"),
    parseFloat("012"),
    Math.abs(1),
    Math.acos(1),
    Math.asin(1),
    Math.atan(1),
    Math.atan2(1, 2),
    Math.ceil(1),
    Math.cos(1),
    Math.E,
    Math.exp(1),
    Math.floor(1),
    Math.LN10,
    Math.LN2,
    Math.log(1),
    Math.LOG10E,
    Math.LOG2E,
    Math.max(1, 2),
    Math.min(1, 2),
    Math.PI,
    Math.pow(1, 2),
    Math.pow(5, 5),
    Math.random(),
    Math.round(1),
    Math.sin(1),
    Math.sqrt(1),
    Math.SQRT1_2,
    Math.SQRT2,
    Math.tan(1),

    Number.MAX_VALUE,
    Number.MIN_VALUE,
    "0.0",
    "0x0",
    "0e+5",
    "000",
    "0.0e-5",
    "0.0E5",
    +"",
    +1,
    +3.14,
    +37,
    +5,
    +[],
    +false,
    +Math.LN2,
    +true,
    //@ts-ignore: <This is parsed to a number.>
    +null,
    +new Date(),
  ];

  for (const fixture of fixtures) {
    assert(isNumber(fixture));
  }
});

Deno.test("Assert Not Valid Numbers.", () => {
  const fixtures = [
    "   ",
    "\r\n\t",
    "",
    "",
    "3a",
    "abc",
    "false",
    "null",
    "true",
    "undefined",
    +"abc",
    +/foo/,
    +[1, 2, 4],
    +Infinity,
    +Math.sin,
    +NaN,
    // @ts-ignore: <This converts to NaN>
    +undefined,
    +{ a: 1 },
    +{},
    /foo/,
    [1, 2, 3],
    [1],
    [],
    true,
    false,
    +function () {},
    function () {},
    Infinity,
    -Infinity,
    Math.sin,
    NaN,
    new Date(),
    null,
    undefined,
    {},
  ];

  fixtures.forEach((fixture) => {
    assertThrows(() => assertIsNumber(fixture));
  });
});

Deno.test("Asserts Valid Numbers.", () => {
  const fixtures = [
    0xff,
    5e3,
    0,
    0.1,
    -0.1,
    -1.1,
    37,
    3.14,

    1,
    1.1,
    10,
    10.1,
    100,
    -100,

    "0.1",
    "-0.1",
    "-1.1",
    "0",
    "012",
    "0xff",
    "1",
    "1.1",
    "10",
    "10.10",
    "100",
    "5e3",
    "   56\r\n  ",

    Math.LN2,

    parseInt("012"),
    parseFloat("012"),
    Math.abs(1),
    Math.acos(1),
    Math.asin(1),
    Math.atan(1),
    Math.atan2(1, 2),
    Math.ceil(1),
    Math.cos(1),
    Math.E,
    Math.exp(1),
    Math.floor(1),
    Math.LN10,
    Math.LN2,
    Math.log(1),
    Math.LOG10E,
    Math.LOG2E,
    Math.max(1, 2),
    Math.min(1, 2),
    Math.PI,
    Math.pow(1, 2),
    Math.pow(5, 5),
    Math.random(),
    Math.round(1),
    Math.sin(1),
    Math.sqrt(1),
    Math.SQRT1_2,
    Math.SQRT2,
    Math.tan(1),

    Number.MAX_VALUE,
    Number.MIN_VALUE,
    "0.0",
    "0x0",
    "0e+5",
    "000",
    "0.0e-5",
    "0.0E5",
    +"",
    +1,
    +3.14,
    +37,
    +5,
    +[],
    +false,
    +Math.LN2,
    +true,
    //@ts-ignore: <This is parsed to a number.>
    +null,
    +new Date(),
  ];

  for (const fixture of fixtures) {
    assertIsNumber(fixture);
  }
});

# Check if a String is Numeric

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/deno-is-numeric?color=blue&label=Total%20Lines)
![CodeQL](https://github.com/UltiRequiem/deno-is-numeric/workflows/CodeQL/badge.svg)

You can get this package by [nest.land](https://nest.land/package/is_numeric) or
[deno.land](https://deno.land/x/is_numeric).

## Usage

This package exposes two Functions,
[isNumeric](https://github.com/UltiRequiem/deno-is-numeric/blob/main/mod.ts#L1)
and
[isNumericSync](https://github.com/UltiRequiem/deno-is-numeric/blob/main/mod.ts#L5).

```typescript
import isNumeric, {
  isNumericSync,
} from "https://deno.land/x/is_numeric/mod.ts";

console.log(await isNumeric("hello")); // false

async function somethingAsync() {
  console.log(await isNumeric("123")); // true
}

somethingAsync();

isNumeric("hi").then((stringPossiblyNumerical) =>
  console.log(stringPossiblyNumerical)
); // false

console.log(isNumericSync("678")); // true
```

### License

[This project](https://deno.land/x/is_numeric) is licensed under the
[MIT License](./LICENSE.md).

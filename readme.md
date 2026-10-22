# is-number

[![npm](https://img.shields.io/npm/v/@ultirequiem/is-number?logo=npm&color=cb3837)](https://www.npmjs.com/package/@ultirequiem/is-number)
[![npm downloads](https://img.shields.io/npm/dm/@ultirequiem/is-number?color=cb3837)](https://www.npmjs.com/package/@ultirequiem/is-number)
[![CI](https://github.com/UltiRequiem/is-number/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/is-number/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/UltiRequiem/is-number/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/is-number)

In JavaScript, it's not always as straightforward as it should be to reliably
check if a value is a number. It's common for devs to use `+`, `-`, or
`Number()` to cast a string value to a number (for example, when values are
returned from user input, regex matches, parsers, etc). But there are many
non-intuitive edge cases that yield unexpected results:

```javascript
console.log(+[]); //=> 0
console.log(+""); //=> 0
console.log(+"   "); //=> 0
console.log(typeof NaN); //=> 'number'
```

## Usage

### [Node.js 🐢🚀](https://npmjs.com/package/@ultirequiem/is-number)

```javascript
import { assertIsNumber, isNumber } from "@ultirequiem/is-number";

isNumber("hello"); //=> false
isNumber("678"); //=> true
isNumber({}); //=> false
isNumber(+{ a: "34" }); //=> false
isNumber(345); //=> true

assertIsNumber([123]); //=> throws
assertIsNumber({}); //=> throws
assertIsNumber(34); //=> doesn't throws
```

### Browser

You can use any [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) 🔥

Eg. [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
▶ [SkyPack](https://cdn.skypack.dev/@ultirequiem/is-number) _/_
[script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) ▶
[JSDelivr](https://cdn.jsdelivr.net/npm/@ultirequiem/is-number).

_The API is the same on all these platforms._

## Documentation

Includes
[TypeScript type guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates),
so using it will narrow the type of previously-unknown values.

```javascript
export function isEven(n: unknown): boolean {
  n++ // Error, n is not a number

  assertIsNumber(n);

  return n % 2 === 0; // OK
}
```

### True Cases

```javascript
isNumber(5e3);
isNumber(0xff);
isNumber(-1.1);
isNumber(0);
isNumber(1);
isNumber(1.1);
isNumber(10);
isNumber(10.1);
isNumber(100);
isNumber("-1.1");
isNumber("0");
isNumber("012");
isNumber("0xff");
isNumber("1");
isNumber("1.1");
isNumber("10");
isNumber("10.10");
isNumber("100");
isNumber("5e3");
isNumber(parseInt("012"));
isNumber(parseFloat("012"));
```

### False cases

Everything else is false.

```javascript
isNumber(Infinity);
isNumber(NaN);
isNumber(null);
isNumber(undefined);
isNumber("");
isNumber("   ");
isNumber("foo");
isNumber([1]);
isNumber([]);
isNumber(function () {});
isNumber({});
```

See the [tests](./mod_test.ts) for more examples.

## Support

Open an Issue, I will check it as soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/intent/tweet?text=%40UltiRequiem%20) 😆

Don't forget to star the repo ⭐

## Versioning

We use [SemVer](http://semver.org) for versioning. For the versions available,
see the [tags](https://github.com/UltiRequiem/is-number/tags).

## Authors

[Eliaz Bobadilla (a.k.a UltiRequiem)](https://ultirequiem.com) - Creator and
Maintainer 💪

See also the full list of
[contributors](https://github.com/UltiRequiem/is-number/contributors) who
participated in this project.

## Licence

Licensed under the MIT License.

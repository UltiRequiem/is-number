import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.4/command/mod.ts";

import { isNumber } from "./mod.ts";

const { args, options } = await new Command()
  .arguments("<...input>")
  .option("-v, --verbose", "Verbose output")
  .name("is-number")
  .version("0.1.0")
  .description("Check if something is a number.")
  .parse(Deno.args);

for (const possibleNumber of args[0]) {
  const isANumber = isNumber(possibleNumber);

  const message = options.verbose
    ? `"${possibleNumber}" is a number? ${isANumber}`
    : isANumber;

  console.log(message);
}

import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.15/node_support.ts";

buildPackage(
  {
    repoName: "@ultirequiem/is-number",
    description: "Check if something is a valid number.",
    homepage: "https://is-number.js.org",
    keywords: ["number", "math"],
    version: "1.6.1",
  },
  {
    entryPoints: [
      "./mod.ts",
      { name: "is-number", path: "./is-number.ts", kind: "bin" },
    ],
    supportCJS: false,
    check: false,
  },
);

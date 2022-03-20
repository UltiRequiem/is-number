import { build } from "https://deno.land/x/dnt@0.22.0/mod.ts";

const publisher = {
  name: "Eliaz Bobadilla",
  username: "ultirequiem",
  email: "eliaz.bobadilladev@gmail.com",
  site: "https://ultirequiem.com",
} as const;

const packageConfig = {
  name: "@ultirequiem/is-number",
  repoName: "is-number",
  version: "1.3.0",
  description: "Check if a string is a valid number.",
  keywords: ["math", "string"],
  license: "MIT",
  homepage: "https://is-number.js.org",
} as const;

await build({
  entryPoints: ["./mod.ts"],

  outDir: "./node",

  shims: {
    deno: true,
  },

  package: {
    name: packageConfig.name,
    description: packageConfig.description,

    version: packageConfig.version,

    license: packageConfig.license,

    funding: {
      type: "patreon",
      url: `https://www.patreon.com/${publisher.username}`,
    },

    repository: `github:${publisher.username}/${packageConfig.repoName}`,
    homepage: packageConfig.homepage,

    bugs: {
      url:
        `https://github.com/${publisher.username}/${packageConfig.repoName}/issues`,
      email: publisher.email,
    },

    keywords: packageConfig.keywords,
  },
});

Deno.copyFileSync("license", "node/LICENSE");
Deno.copyFileSync("readme.md", "node/README.md");

// src/cli/index.ts
import process2 from "process";
import c3 from "picocolors";
import { hideBin } from "yargs/helpers";
import yargs from "yargs";

// src/cli/run.ts
import fs from "fs";
import fsp from "fs/promises";
import path from "path";
import process from "process";
import prompts from "prompts";
import c2 from "picocolors";
import parse from "parse-gitignore";

// src/cli/constants.ts
import c from "picocolors";

// package.json
var version = "2.6.3";
var devDependencies = {
  "@antfu/eslint-config": "workspace:*",
  "@antfu/eslint-plugin-prettier": "^5.0.1-1",
  "@antfu/ni": "^0.21.12",
  "@stylistic/eslint-plugin-migrate": "^1.5.4",
  "@types/eslint": "^8.56.2",
  "@types/fs-extra": "^11.0.4",
  "@types/node": "^20.11.5",
  "@types/prompts": "^2.4.9",
  "@types/yargs": "^17.0.32",
  "@unocss/eslint-plugin": "^0.58.3",
  "astro-eslint-parser": "^0.16.2",
  bumpp: "^9.3.0",
  eslint: "npm:eslint-ts-patch@^8.56.0-0",
  "eslint-flat-config-viewer": "^0.1.11",
  "eslint-plugin-astro": "^0.31.3",
  "eslint-plugin-format": "^0.1.0",
  "eslint-plugin-react": "^7.33.2",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.5",
  "eslint-plugin-svelte": "^2.35.1",
  "eslint-ts-patch": "^8.56.0-0",
  esno: "^4.0.0",
  execa: "^8.0.1",
  "fast-glob": "^3.3.2",
  "fs-extra": "^11.2.0",
  "lint-staged": "^15.2.0",
  rimraf: "^5.0.5",
  "simple-git-hooks": "^2.9.0",
  svelte: "^4.2.9",
  "svelte-eslint-parser": "^0.33.1",
  tsup: "^8.0.1",
  typescript: "^5.3.3",
  vitest: "^1.2.0",
  vue: "^3.4.14"
};

// src/cli/constants.ts
var ARROW = c.cyan("\u2192");
var CHECK = c.green("\u2714");
var CROSS = c.red("\u2718");
var WARN = c.yellow("\u2139");
var eslintVersion = devDependencies.eslint;
var vscodeSettingsString = `
  // Enable the ESlint flat config support
  "eslint.experimental.useFlatConfig": true,

  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off" },
    { "rule": "format/*", "severity": "off" },
    { "rule": "*-indent", "severity": "off" },
    { "rule": "*-spacing", "severity": "off" },
    { "rule": "*-spaces", "severity": "off" },
    { "rule": "*-order", "severity": "off" },
    { "rule": "*-dangle", "severity": "off" },
    { "rule": "*-newline", "severity": "off" },
    { "rule": "*quotes", "severity": "off" },
    { "rule": "*semi", "severity": "off" }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml"
  ]
`;

// src/cli/utils.ts
import { execSync } from "child_process";
function isGitClean() {
  try {
    execSync("git diff-index --quiet HEAD --");
    return true;
  } catch (error) {
    return false;
  }
}

// src/cli/run.ts
async function run(options = {}) {
  const SKIP_PROMPT = !!process.env.SKIP_PROMPT || options.yes;
  const SKIP_GIT_CHECK = !!process.env.SKIP_GIT_CHECK;
  const cwd = process.cwd();
  const pathFlatConfig = path.join(cwd, "eslint.config.js");
  const pathPackageJSON = path.join(cwd, "package.json");
  const pathESLintIgnore = path.join(cwd, ".eslintignore");
  if (fs.existsSync(pathFlatConfig)) {
    console.log(c2.yellow(`${WARN} eslint.config.js already exists, migration wizard exited.`));
    return process.exit(1);
  }
  if (!SKIP_GIT_CHECK && !isGitClean()) {
    const { confirmed } = await prompts({
      initial: false,
      message: "There are uncommitted changes in the current repository, are you sure to continue?",
      name: "confirmed",
      type: "confirm"
    });
    if (!confirmed)
      return process.exit(1);
  }
  console.log(c2.cyan(`${ARROW} bumping @antfu/eslint-config to v${version}`));
  const pkgContent = await fsp.readFile(pathPackageJSON, "utf-8");
  const pkg = JSON.parse(pkgContent);
  pkg.devDependencies ?? (pkg.devDependencies = {});
  pkg.devDependencies["@antfu/eslint-config"] = `^${version}`;
  if (!pkg.devDependencies.eslint)
    pkg.devDependencies.eslint = eslintVersion;
  await fsp.writeFile(pathPackageJSON, JSON.stringify(pkg, null, 2));
  console.log(c2.green(`${CHECK} changes wrote to package.json`));
  const eslintIgnores = [];
  if (fs.existsSync(pathESLintIgnore)) {
    console.log(c2.cyan(`${ARROW} migrating existing .eslintignore`));
    const content = await fsp.readFile(pathESLintIgnore, "utf-8");
    const parsed = parse(content);
    const globs = parsed.globs();
    for (const glob of globs) {
      if (glob.type === "ignore")
        eslintIgnores.push(...glob.patterns);
      else if (glob.type === "unignore")
        eslintIgnores.push(...glob.patterns.map((pattern) => `!${pattern}`));
    }
  }
  let eslintConfigContent = "";
  const antfuConfig = `${eslintIgnores.length ? `ignores: ${JSON.stringify(eslintIgnores)}` : ""}`;
  if (pkg.type === "module") {
    eslintConfigContent = `
import antfu from '@antfu/eslint-config'

export default antfu({
${antfuConfig}
})
`.trimStart();
  } else {
    eslintConfigContent = `
const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
${antfuConfig}
})
`.trimStart();
  }
  await fsp.writeFile(pathFlatConfig, eslintConfigContent);
  console.log(c2.green(`${CHECK} created eslint.config.js`));
  const files = fs.readdirSync(cwd);
  const legacyConfig = [];
  files.forEach((file) => {
    if (file.includes("eslint") || file.includes("prettier"))
      legacyConfig.push(file);
  });
  if (legacyConfig.length) {
    console.log(`${WARN} you can now remove those files manually:`);
    console.log(`   ${c2.dim(legacyConfig.join(", "))}`);
  }
  let promptResult = {
    updateVscodeSettings: true
  };
  if (!SKIP_PROMPT) {
    try {
      promptResult = await prompts({
        initial: true,
        message: "Update .vscode/settings.json for better VS Code experience?",
        name: "updateVscodeSettings",
        type: "confirm"
      }, {
        onCancel: () => {
          throw new Error(`Cancelled`);
        }
      });
    } catch (cancelled) {
      console.log(cancelled.message);
      return;
    }
  }
  if (promptResult?.updateVscodeSettings ?? true) {
    const dotVscodePath = path.join(cwd, ".vscode");
    const settingsPath = path.join(dotVscodePath, "settings.json");
    if (!fs.existsSync(dotVscodePath))
      await fsp.mkdir(dotVscodePath, { recursive: true });
    if (!fs.existsSync(settingsPath)) {
      await fsp.writeFile(settingsPath, `{${vscodeSettingsString}}
`, "utf-8");
      console.log(c2.green(`${CHECK} created .vscode/settings.json`));
    } else {
      let settingsContent = await fsp.readFile(settingsPath, "utf8");
      settingsContent = settingsContent.trim().replace(/\s*}$/, "");
      settingsContent += settingsContent.endsWith(",") || settingsContent.endsWith("{") ? "" : ",";
      settingsContent += `${vscodeSettingsString}}
`;
      await fsp.writeFile(settingsPath, settingsContent, "utf-8");
      console.log(c2.green(`${CHECK} updated .vscode/settings.json`));
    }
  }
  console.log(c2.green(`${CHECK} migration completed`));
  console.log(`Now you can update the dependencies and run ${c2.blue("eslint . --fix")}
`);
}

// src/cli/index.ts
function header() {
  console.log(`
${c3.green(`@antfu/eslint-config `)}${c3.dim(`v${version}`)}`);
}
var instance = yargs(hideBin(process2.argv)).scriptName("@antfu/eslint-config").usage("").command(
  "*",
  "Run the initialization or migration",
  (args) => args.option("yes", { alias: "y", description: "Skip prompts and use default values", type: "boolean" }).help(),
  async (args) => {
    header();
    console.log();
    try {
      await run(args);
    } catch (error) {
      console.error(c3.inverse(c3.red(" Failed to migrate ")));
      console.error(c3.red(`${CROSS} ${String(error)}`));
      process2.exit(1);
    }
  }
).showHelpOnFail(false).alias("h", "help").version("version", version).alias("v", "version");
instance.help().argv;

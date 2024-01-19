"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/cli.ts
var cli_exports = {};
module.exports = __toCommonJS(cli_exports);

// src/cli/index.ts
var import_node_process2 = __toESM(require("process"), 1);
var import_picocolors3 = __toESM(require("picocolors"), 1);
var import_helpers = require("yargs/helpers");
var import_yargs = __toESM(require("yargs"), 1);

// src/cli/run.ts
var import_node_fs = __toESM(require("fs"), 1);
var import_promises = __toESM(require("fs/promises"), 1);
var import_node_path = __toESM(require("path"), 1);
var import_node_process = __toESM(require("process"), 1);
var import_prompts = __toESM(require("prompts"), 1);
var import_picocolors2 = __toESM(require("picocolors"), 1);
var import_parse_gitignore = __toESM(require("parse-gitignore"), 1);

// src/cli/constants.ts
var import_picocolors = __toESM(require("picocolors"), 1);

// package.json
var version = "2.6.4";
var devDependencies = {
  "@antfu/eslint-config": "^2.6.3",
  "@antfu/eslint-plugin-prettier": "^5.0.1-1",
  "@antfu/ni": "^0.21.12",
  "@stylistic/eslint-plugin-migrate": "^1.5.4",
  "@types/eslint": "^8.56.2",
  "@types/fs-extra": "^11.0.4",
  "@types/node": "^20.11.5",
  "@types/prompts": "^2.4.9",
  "@types/yargs": "^17.0.32",
  "@unocss/eslint-plugin": "^0.58.3",
  bumpp: "^9.3.0",
  eslint: "npm:eslint-ts-patch@^8.56.0-0",
  "eslint-flat-config-viewer": "^0.1.11",
  "eslint-plugin-format": "^0.1.0",
  "eslint-plugin-react": "^7.33.2",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.5",
  "eslint-plugin-solid": "github:Rettend/eslint-plugin-solid",
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
var ARROW = import_picocolors.default.cyan("\u2192");
var CHECK = import_picocolors.default.green("\u2714");
var CROSS = import_picocolors.default.red("\u2718");
var WARN = import_picocolors.default.yellow("\u2139");
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
var import_node_child_process = require("child_process");
function isGitClean() {
  try {
    (0, import_node_child_process.execSync)("git diff-index --quiet HEAD --");
    return true;
  } catch (error) {
    return false;
  }
}

// src/cli/run.ts
async function run(options = {}) {
  const SKIP_PROMPT = !!import_node_process.default.env.SKIP_PROMPT || options.yes;
  const SKIP_GIT_CHECK = !!import_node_process.default.env.SKIP_GIT_CHECK;
  const cwd = import_node_process.default.cwd();
  const pathFlatConfig = import_node_path.default.join(cwd, "eslint.config.js");
  const pathPackageJSON = import_node_path.default.join(cwd, "package.json");
  const pathESLintIgnore = import_node_path.default.join(cwd, ".eslintignore");
  if (import_node_fs.default.existsSync(pathFlatConfig)) {
    console.log(import_picocolors2.default.yellow(`${WARN} eslint.config.js already exists, migration wizard exited.`));
    return import_node_process.default.exit(1);
  }
  if (!SKIP_GIT_CHECK && !isGitClean()) {
    const { confirmed } = await (0, import_prompts.default)({
      initial: false,
      message: "There are uncommitted changes in the current repository, are you sure to continue?",
      name: "confirmed",
      type: "confirm"
    });
    if (!confirmed)
      return import_node_process.default.exit(1);
  }
  console.log(import_picocolors2.default.cyan(`${ARROW} bumping @antfu/eslint-config to v${version}`));
  const pkgContent = await import_promises.default.readFile(pathPackageJSON, "utf-8");
  const pkg = JSON.parse(pkgContent);
  pkg.devDependencies ?? (pkg.devDependencies = {});
  pkg.devDependencies["@antfu/eslint-config"] = `^${version}`;
  if (!pkg.devDependencies.eslint)
    pkg.devDependencies.eslint = eslintVersion;
  await import_promises.default.writeFile(pathPackageJSON, JSON.stringify(pkg, null, 2));
  console.log(import_picocolors2.default.green(`${CHECK} changes wrote to package.json`));
  const eslintIgnores = [];
  if (import_node_fs.default.existsSync(pathESLintIgnore)) {
    console.log(import_picocolors2.default.cyan(`${ARROW} migrating existing .eslintignore`));
    const content = await import_promises.default.readFile(pathESLintIgnore, "utf-8");
    const parsed = (0, import_parse_gitignore.default)(content);
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
  await import_promises.default.writeFile(pathFlatConfig, eslintConfigContent);
  console.log(import_picocolors2.default.green(`${CHECK} created eslint.config.js`));
  const files = import_node_fs.default.readdirSync(cwd);
  const legacyConfig = [];
  files.forEach((file) => {
    if (file.includes("eslint") || file.includes("prettier"))
      legacyConfig.push(file);
  });
  if (legacyConfig.length) {
    console.log(`${WARN} you can now remove those files manually:`);
    console.log(`   ${import_picocolors2.default.dim(legacyConfig.join(", "))}`);
  }
  let promptResult = {
    updateVscodeSettings: true
  };
  if (!SKIP_PROMPT) {
    try {
      promptResult = await (0, import_prompts.default)({
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
    const dotVscodePath = import_node_path.default.join(cwd, ".vscode");
    const settingsPath = import_node_path.default.join(dotVscodePath, "settings.json");
    if (!import_node_fs.default.existsSync(dotVscodePath))
      await import_promises.default.mkdir(dotVscodePath, { recursive: true });
    if (!import_node_fs.default.existsSync(settingsPath)) {
      await import_promises.default.writeFile(settingsPath, `{${vscodeSettingsString}}
`, "utf-8");
      console.log(import_picocolors2.default.green(`${CHECK} created .vscode/settings.json`));
    } else {
      let settingsContent = await import_promises.default.readFile(settingsPath, "utf8");
      settingsContent = settingsContent.trim().replace(/\s*}$/, "");
      settingsContent += settingsContent.endsWith(",") || settingsContent.endsWith("{") ? "" : ",";
      settingsContent += `${vscodeSettingsString}}
`;
      await import_promises.default.writeFile(settingsPath, settingsContent, "utf-8");
      console.log(import_picocolors2.default.green(`${CHECK} updated .vscode/settings.json`));
    }
  }
  console.log(import_picocolors2.default.green(`${CHECK} migration completed`));
  console.log(`Now you can update the dependencies and run ${import_picocolors2.default.blue("eslint . --fix")}
`);
}

// src/cli/index.ts
function header() {
  console.log(`
${import_picocolors3.default.green(`@antfu/eslint-config `)}${import_picocolors3.default.dim(`v${version}`)}`);
}
var instance = (0, import_yargs.default)((0, import_helpers.hideBin)(import_node_process2.default.argv)).scriptName("@antfu/eslint-config").usage("").command(
  "*",
  "Run the initialization or migration",
  (args) => args.option("yes", { alias: "y", description: "Skip prompts and use default values", type: "boolean" }).help(),
  async (args) => {
    header();
    console.log();
    try {
      await run(args);
    } catch (error) {
      console.error(import_picocolors3.default.inverse(import_picocolors3.default.red(" Failed to migrate ")));
      console.error(import_picocolors3.default.red(`${CROSS} ${String(error)}`));
      import_node_process2.default.exit(1);
    }
  }
).showHelpOnFail(false).alias("h", "help").version("version", version).alias("v", "version");
instance.help().argv;

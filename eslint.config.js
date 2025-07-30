// https://docs.expo.dev/guides/using-eslint/
import { defineConfig } from "eslint/config";
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
    extends: ["plugin:import/typescript"],
  },
]);

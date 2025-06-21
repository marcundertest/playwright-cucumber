/** @type {import('@cucumber/cucumber').IConfiguration} */
module.exports = {
  default: [
    "--require-module",
    "ts-node/register",
    "--require",
    "tests/steps/**/*.ts",
    "--require",
    "tests/support/world.ts",
    "--format",
    "progress",
    "tests/features/**/*.feature",
  ].join(" "),
};

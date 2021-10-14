/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on: any, config: Cypress.PluginConfig) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  return Object.assign({}, config, {
    // fixtures路径
    fixturesFolder: "tests/e2e/fixtures",
    // 测试脚本文件夹
    integrationFolder: "tests/e2e/specs",
    // 从 cy.screenshot() 命令或在 cypress 运行期间测试失败后保存屏幕截图的文件夹路径
    screenshotsFolder: "tests/e2e/screenshots",
    // cypress 运行期间保存视频的文件夹路径
    videosFolder: "tests/e2e/videos",
    // 在加载测试文件之前加载的文件路径。 这个文件被编译和捆绑。 （通过 false 禁用）
    supportFile: "tests/e2e/support/index.ts",
  });
};

module.exports = {
  presets: [
    [
      // 安装官方预设插件
      "@babel/preset-env",
      // 指定解析的目标是本机node版本
      { targets: { node: "current" } },
    ],
    "@babel/preset-typescript",
  ],
};

import { UserConfigExport, ConfigEnv, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { viteMockServe } from "vite-plugin-mock";
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const plugins = [vue()];
  const env = loadEnv(mode, process.cwd());
  // 如果当前不是生产环境，使用添加mock插件
  if (env.VITE_USER_NODE_ENV !== "production") {
    plugins.push(
      viteMockServe({
        mockPath: "mock",
        localEnabled: command === "serve",
      })
    );
  }
  // 处理使用import.meta.env jest 测试报错问题
  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => {
      return {
        ...prev,
        // 环境变量添加process.env
        ["process.env." + key]: `"${val}"`,
      };
    },
    {}
  );
  return {
    base: "./",
    resolve: {
      alias: {
        "@": resolve("./src"),
      },
    },
    plugins,
    define: envWithProcessPrefix,
  };
};

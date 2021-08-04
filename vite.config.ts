import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
export default defineConfig({
  base: "./",
  server: {
    open: true,
    host: "0.0.0.0",
    // proxy: {
    //   "/api": {
    //     target: "http://jsonplaceholder.typicode.com",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // },
  },
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
  plugins: [vue()],
  build: {
    target: "es2015",
  },
});

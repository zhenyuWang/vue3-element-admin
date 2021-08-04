import "@/styles/index.scss";
import { createApp } from "vue";
import App from "@/App.vue";
import store from "./store";
import router from "./router/index";
// Element3相关
import "element3/lib/theme-chalk/index.css";
import { ElIcon, ElButton, ElLink } from "element3";
createApp(App)
  .use(router)
  .use(store)
  .use(ElIcon)
  .use(ElButton)
  .use(ElLink)
  .mount("#app");

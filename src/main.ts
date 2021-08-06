import "@/styles/index.scss";
import { createApp } from "vue";
import App from "@/App.vue";
import store from "./store";
import router from "./router/index";
// Element3相关
import "element3/lib/theme-chalk/index.css";
import {
  ElIcon,
  ElButton,
  ElLink,
  ElForm,
  ElFormItem,
  ElInput,
} from "element3";

// vite环境变量直接使用jest测试报错，所以绑定到window上
window.baseUrl = import.meta.env.VITE_BASE_API;
window.mode = import.meta.env.MODE;
createApp(App)
  .use(store)
  .use(router)
  .use(ElIcon)
  .use(ElButton)
  .use(ElLink)
  .use(ElForm)
  .use(ElFormItem)
  .use(ElInput)
  .mount("#app");

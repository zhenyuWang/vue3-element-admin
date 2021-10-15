import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
// Element3样式文件
import "element3/lib/theme-chalk/index.css";
import { ElIcon, ElButton, ElForm, ElFormItem, ElInput } from "element3";

createApp(App)
  .use(store)
  .use(router)
  .use(ElIcon)
  .use(ElButton)
  .use(ElForm)
  .use(ElFormItem)
  .use(ElInput)
  .mount("#app");

import { createRouter, createWebHashHistory } from "vue-router";
export const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/404",
    name: "404",
    hidden: true,
    meta: { notNeedAuth: true },
    component: () => import("@/views/404.vue"),
  },
  // 匹配所有路径  vue2使用*  vue3使用/:pathMatch(.*)或/:catchAll(.*)
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

// 路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;

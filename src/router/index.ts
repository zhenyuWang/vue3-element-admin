import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store";

/* Layout */
import Layout from "@/layout/index.vue";

import table from "./modules/table";
// 无需权限的路由
export const routes = [
  {
    path: "/login",
    name: "Login",
    fullPath: "/login",
    meta: { notNeedAuth: true },
    component: () => import("@/views/Login.vue"),
  },
  // 匹配所有路径  vue2使用*  vue3使用/:pathMatch(.*)或/:catchAll(.*)
  {
    path: "/404",
    name: "404",
    hidden: true,
    component: () => import("@/views/404.vue"),
  },
];
// 需要校验权限的路由
export const permissionRoutes = [
  {
    path: "/",
    fullPath: "/",
    component: Layout,
    redirect: "/home",
    name: "Root",
    children: [
      {
        path: "home",
        fullPath: "/home",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      table,
    ],
  },
  {
    path: "/:catchAll(.*)",
    hidden: true,
    redirect: "/404",
  },
];

// 路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 始终滚动到顶部
  scrollBehavior() {
    return { top: 0 };
  },
});

// removeRoute https://next.router.vuejs.org/zh/api/#removeroute
// router.addRoute  https://router.vuejs.org/zh/api/#router-addroutes
// 路由前置守卫
router.beforeEach((to) => {
  /* 
    false 以取消导航
    一个路由
    不返回或者返回true 则去to
    如果遇到了意料之外的情况，可能会抛出一个 Error 这会取消导航并且调用 router.onError() 注册过的回调
    也就是用不到next了，但是next还是可以使用
  */
  // 如果to需要鉴权
  if (!to.meta.notNeedAuth) {
    // 获取userInfo
    const userInfo = store.getters.userInfo;
    // 如果未登录
    if (!userInfo.name || !userInfo.roles.length) {
      return { name: "Login" };
    }
  }
});
// 这里可以收集用户路由历史信息
// router.afterEach((to: any) => {
// });

export default router;

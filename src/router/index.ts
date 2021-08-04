import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  { path: "/", redirect: "/home" },
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
  // 匹配所有路径  vue2使用*  vue3使用/:pathMatch(.*)或/:catchAll(.*)
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 };
  },
});

// removeRoute https://next.router.vuejs.org/zh/api/#removeroute
// router.addRoute  https://router.vuejs.org/zh/api/#router-addroutes
// 路由前置守卫
router.beforeEach(() => {
  /* 
    false 以取消导航
    一个路由
    不返回或者返回true 则去to
    如果遇到了意料之外的情况，可能会抛出一个 Error 这会取消导航并且调用 router.onError() 注册过的回调
    也就是用不到next了，但是next还是可以使用
  */
});
// 这里可以收集用户路由历史信息
// router.afterEach((to: any) => {
// });

export default router;

import router, { routes, permissionRoutes } from "@/router";
import store from "@/store";
type routes = any[];
type state = {
  routes: routes;
  permissionRoutes: routes;
};
type context = {
  state: Record<string, unknown>;
  mutations: Record<string, unknown>;
  actions: Record<string, unknown>;
  commit: any;
};
function handleFixedVisitedViews(context: context, routes: any[]) {
  routes.forEach((route) => {
    if (route.meta && route.meta.fixed) {
      store.dispatch("tagsView/addFixedVisitedView", route);
    }
    if (route.children && route.children.length)
      handleFixedVisitedViews(context, route.children);
  });
}
export default {
  namespaced: true,
  state: {
    routes: [],
    permissionRoutes: [],
  },
  mutations: {
    setRoutes(state: state, permissionRoutes: routes) {
      state.routes = routes.concat(permissionRoutes);
      state.permissionRoutes = permissionRoutes;
    },
  },
  actions: {
    handleRoutes(context: context) {
      permissionRoutes.forEach((item) => {
        router.addRoute(item);
      });
      handleFixedVisitedViews(context, permissionRoutes);
      context.commit("setRoutes", permissionRoutes);
    },
    resetRoute(context: context) {
      permissionRoutes.forEach((item) => {
        if (item.name) router.removeRoute(item.name);
      });
      context.commit("setRoutes", []);
    },
  },
};

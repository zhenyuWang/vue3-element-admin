import router, { routes, permissionRoutes } from "@/router";
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
      context.commit("setRoutes", permissionRoutes);
    },
  },
};

interface TagsViewState {
  cachedViews: string[];
  fixedVisitedViews: any[];
  visitedViews: any[];
}
type context = {
  state: Record<string, unknown>;
  mutations: Record<string, unknown>;
  actions: Record<string, unknown>;
  commit: any;
};
export default {
  namespaced: true,
  state: {
    // 缓存路由
    cachedViews: [],
    // 固定tabbar的路由
    fixedVisitedViews: [],
    // 访问过的路由
    visitedViews: [],
  },
  mutations: {
    // 添加缓存路由
    ADD_CACHE_VIEW(state: TagsViewState, name: string) {
      if (state.cachedViews.indexOf(name) === -1) state.cachedViews.push(name);
    },
    // 删除缓存路由
    DELETE_CACHE_VIEW(state: TagsViewState, name: string) {
      const index = state.cachedViews.indexOf(name);
      if (index > -1) state.cachedViews.splice(index, 1);
    },
    // 清空缓存路由
    CLEAR_CACHE_VIEW(state: TagsViewState) {
      state.cachedViews = [];
    },
    // 添加固定路由
    ADD_FIXED_VISITED_VIEW(state: TagsViewState, view: any) {
      for (let i = 0; i < state.fixedVisitedViews.length; i++) {
        if (state.fixedVisitedViews[i].name === view.name) return;
      }
      state.fixedVisitedViews.push(view);
    },
    // 清空固定路由
    CLEAR_FIXED_VISITED_VIEW(state: TagsViewState) {
      state.fixedVisitedViews = [];
    },
    // 添加访问过的路由
    ADD_VISITED_VIEW(state: TagsViewState, view: any) {
      for (let i = 0; i < state.visitedViews.length; i++) {
        if (state.visitedViews[i].name === view.name) return;
      }
      state.visitedViews.push(view);
    },
    // 删除访问过的路由
    DELETE_VISITED_VIEW(state: TagsViewState, view: any) {
      state.visitedViews = state.visitedViews.filter((item) => {
        return item.name !== view.name;
      });
    },
    // 删除其他访问过的路由
    DELETE_OTHER_VISITED_VIEW(state: TagsViewState, view: any) {
      state.visitedViews.forEach((item) => {
        if (item.name !== view.name) {
          const index = state.cachedViews.indexOf(item.name);
          if (index > -1) state.cachedViews.splice(index, 1);
        }
      });
      state.visitedViews = [...state.fixedVisitedViews, view];
    },
    // 清空访问过的路由
    CLEAR_VISITED_VIEW(state: TagsViewState) {
      state.visitedViews = [...state.fixedVisitedViews];
    },
  },
  actions: {
    // 添加固定路由
    addFixedVisitedView(context: context, view: any) {
      context.commit("ADD_FIXED_VISITED_VIEW", view);
      context.commit("ADD_VISITED_VIEW", view);
    },
    // 删除访问过的路由
    deleteVisitedView(context: context, view: any) {
      context.commit("DELETE_VISITED_VIEW", view);
      context.commit("DELETE_CACHE_VIEW", view.name);
    },
  },
};

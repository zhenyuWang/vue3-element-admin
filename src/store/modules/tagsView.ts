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
    cachedViews: [],
    fixedVisitedViews: [],
    visitedViews: [],
  },
  mutations: {
    ADD_CACHE_VIEW(state: TagsViewState, name: string) {
      if (state.cachedViews.indexOf(name) === -1) state.cachedViews.push(name);
    },
    DELETE_CACHE_VIEW(state: TagsViewState, name: string) {
      const index = state.cachedViews.indexOf(name);
      if (index > -1) state.cachedViews.splice(index, 1);
    },
    CLEAR_CACHE_VIEW(state: TagsViewState) {
      state.cachedViews = [];
    },
    ADD_FIXED_VISITED_VIEW(state: TagsViewState, view: any) {
      for (let i = 0; i < state.fixedVisitedViews.length; i++) {
        if (state.fixedVisitedViews[i].name === view.name) return;
      }
      state.fixedVisitedViews.push(view);
    },
    CLEAR_FIXED_VISITED_VIEW(state: TagsViewState) {
      state.fixedVisitedViews = [];
    },
    ADD_VISITED_VIEW(state: TagsViewState, view: any) {
      for (let i = 0; i < state.visitedViews.length; i++) {
        if (state.visitedViews[i].name === view.name) return;
      }
      state.visitedViews.push(view);
    },
    DELETE_VISITED_VIEW(state: TagsViewState, view: any) {
      state.visitedViews = state.visitedViews.filter((item) => {
        return item.name !== view.name;
      });
    },
    DELETE_OTHER_VISITED_VIEW(state: TagsViewState, view: any) {
      state.visitedViews.forEach((item) => {
        if (item.name !== view.name) {
          const index = state.cachedViews.indexOf(item.name);
          if (index > -1) state.cachedViews.splice(index, 1);
        }
      });
      state.visitedViews = [...state.fixedVisitedViews, view];
    },
    CLEAR_VISITED_VIEW(state: TagsViewState) {
      state.visitedViews = [...state.fixedVisitedViews];
    },
  },
  actions: {
    addFixedVisitedView(context: context, view: any) {
      context.commit("ADD_FIXED_VISITED_VIEW", view);
      context.commit("ADD_VISITED_VIEW", view);
    },
    deleteVisitedView(context: context, view: any) {
      context.commit("DELETE_VISITED_VIEW", view);
      context.commit("DELETE_CACHE_VIEW", view.name);
    },
  },
};

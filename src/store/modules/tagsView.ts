interface TagsViewState {
  cachedViews: string[];
}
export default {
  namespaced: true,
  state: {
    cachedViews: ["Home", "Child1Template3"],
  },
  mutations: {
    ADD_VIEW(state: TagsViewState, name: string) {
      if (state.cachedViews.indexOf(name) > -1) return;
      state.cachedViews.push(name);
    },
  },
  actions: {},
};

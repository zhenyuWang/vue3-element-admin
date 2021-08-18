interface setting {
  isCollapse: boolean;
}
export default {
  namespaced: true,
  state: {
    isCollapse: false,
  },
  mutations: {
    SET_COLLAPSE(state: setting, val: boolean) {
      state.isCollapse = val;
    },
  },
  actions: {},
};

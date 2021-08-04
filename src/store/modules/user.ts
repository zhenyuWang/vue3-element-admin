type userInfo = {
  name: string;
  age: number;
  roles: Array<string>;
};
type state = {
  userInfo: userInfo;
};
export default {
  namespaced: true,
  state: {
    userInfo: {
      name: "",
      age: "",
      roles: [],
    },
  },
  mutations: {
    setUserInfo(state: state, val: userInfo) {
      state.userInfo = val;
    },
  },
  actions: {
    // 异步动作 commit mutations
  },
};

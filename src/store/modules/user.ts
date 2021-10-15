import { apiLogin } from "@/api/user";
type userInfo = {
  userId: string;
  name: string;
};
type state = {
  userInfo: userInfo;
};
type context = {
  state: Record<string, unknown>;
  mutations: Record<string, unknown>;
  actions: Record<string, unknown>;
  dispatch: any;
  commit: any;
};
type loginData = {
  name: string;
  password: string;
};
export default {
  namespaced: true,
  state: {
    userInfo: {
      userId: "",
      name: "",
    },
  },
  mutations: {
    // 设置用户信息
    SET_USERINFO(state: state, val: userInfo) {
      state.userInfo = val;
    },
  },
  actions: {
    // 登录
    login({ commit }: context, data: loginData) {
      return new Promise((resolve) => {
        apiLogin(data).then(async (res) => {
          // 更新用户信息
          commit("SET_USERINFO", {
            userId: res.body.userId,
            name: res.body.name,
          });
          resolve("success");
        });
      });
    },
  },
};

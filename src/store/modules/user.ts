import { apiLogin } from "@/api/user";
type userInfo = {
  name: string;
  roles: string[];
};
type state = {
  userInfo: userInfo;
};
type loginData = {
  name: string;
  password: string;
};
type context = {
  state: Record<string, unknown>;
  mutations: Record<string, unknown>;
  actions: Record<string, unknown>;
  dispatch: any;
  commit: any;
};
export default {
  namespaced: true,
  state: {
    userInfo: {
      name: "",
      roles: [],
    },
  },
  mutations: {
    setUserInfo(state: state, val: userInfo) {
      state.userInfo = val;
    },
  },
  actions: {
    login(context: context, data: loginData) {
      return new Promise((resolve) => {
        apiLogin(data).then((res) => {
          const ret = res.body;
          context.commit("setUserInfo", {
            name: ret.name,
            roles: ret.roles,
          });
          context.dispatch("permission/handleRoutes", null, { root: true });
          resolve("success");
        });
      });
    },
  },
};

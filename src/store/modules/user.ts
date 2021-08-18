import { apiLogin } from "@/api/user";
type userInfo = {
  name: string;
  avatar: string;
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
      avatar: "",
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
        apiLogin(data).then(async (res) => {
          context.commit("setUserInfo", {
            name: res.body.name,
            avatar: res.body.avatar,
            roles: res.body.roles,
          });
          await context.dispatch("permission/handleRoutes", null, {
            root: true,
          });
          resolve("success");
        });
      });
    },
  },
};

import { apiLogin, apiSignout } from "@/api/user";
type userInfo = {
  name: string;
  token: string;
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
      token: "",
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
    // 登录
    login(context: context, data: loginData) {
      return new Promise((resolve) => {
        apiLogin(data).then(async (res) => {
          // 更新用户信息
          context.commit("setUserInfo", {
            name: res.body.name,
            token: res.body.token,
            avatar: res.body.avatar,
            roles: res.body.roles,
          });
          // 处理权限路由
          await context.dispatch("permission/handleRoutes", null, {
            root: true,
          });
          resolve("success");
        });
      });
    },
    // 退出登录
    signout(context: context) {
      return new Promise((resolve) => {
        apiSignout().then(async () => {
          context.commit("setUserInfo", {
            name: "",
            token: "",
            avatar: "",
            roles: [],
          });
          // 重置路由
          await context.dispatch("permission/resetRoute", null, {
            root: true,
          });
          // 清理缓存路由
          context.commit("tagsView/CLEAR_CACHE_VIEW", null, {
            root: true,
          });
          // 清理访问过的路由
          context.commit("tagsView/CLEAR_VISITED_VIEW", null, {
            root: true,
          });
          // 清理固定路由
          context.commit("tagsView/CLEAR_FIXED_VISITED_VIEW", null, {
            root: true,
          });
          resolve("success");
        });
      });
    },
  },
};

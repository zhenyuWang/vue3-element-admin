type userInfo = {
  name: string;
  roles: Array<string>;
};
type state = {
  user: {
    userInfo: userInfo;
  };
  permission: {
    routes: any[];
    permissionRoutes: any[];
  };
};
export default {
  userInfo: (state: state) => state.user.userInfo,
  routes: (state: state) => state.permission.routes,
  permissionRoutes: (state: state) => state.permission.permissionRoutes,
};

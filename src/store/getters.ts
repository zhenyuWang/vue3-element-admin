type state = {
  user: {
    userInfo: {
      name: string;
      token: string;
      avatar: string;
      roles: string[];
    };
  };
  permission: {
    routes: any[];
    permissionRoutes: any[];
  };
  tagsView: {
    cachedViews: string[];
  };
  setting: {
    isCollapse: boolean;
  };
};
export default {
  userInfo: (state: state) => state.user.userInfo,
  routes: (state: state) => state.permission.routes,
  permissionRoutes: (state: state) => state.permission.permissionRoutes,
  cachedViews: (state: state) => state.tagsView.cachedViews,
  isCollapse: (state: state) => state.setting.isCollapse,
};

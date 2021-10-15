type state = {
  user: {
    userInfo: {
      name: string;
      token: string;
      avatar: string;
      roles: string[];
    };
  };
};
export default {
  userInfo: (state: state) => state.user.userInfo,
};

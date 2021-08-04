type userInfo = {
  name: string;
  age: number;
  roles: Array<string>;
};
type user = {
  user: {
    userInfo: userInfo;
  };
};
export default {
  userInfo: (state: user) => state.user.userInfo,
};

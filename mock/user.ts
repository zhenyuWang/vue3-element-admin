export default [
  {
    url: `/module/user/login`,
    method: "post",
    response: (req) => {
      return {
        header: {
          code: 0,
          msg: "OK",
        },
        body: {
          name: `${req.body.name}小明`,
          roles: ["admin", "集团管理员"],
        },
      };
    },
  },
];

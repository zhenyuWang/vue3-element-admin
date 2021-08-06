// import request from "../utils/request";
// type Method =
//   | "get"
//   | "GET"
//   | "delete"
//   | "DELETE"
//   | "head"
//   | "HEAD"
//   | "options"
//   | "OPTIONS"
//   | "post"
//   | "POST"
//   | "put"
//   | "PUT"
//   | "patch"
//   | "PATCH"
//   | "purge"
//   | "PURGE"
//   | "link"
//   | "LINK"
//   | "unlink"
//   | "UNLINK";
// const curryRequest = (
//   url: string,
//   method: Method,
//   trModuleCode: string,
//   trCode: string,
//   data: Record<string, unknown>
// ) => {
//   return request(`module/user/${url}`, method, trModuleCode, trCode, data);
// };
// 登录
export function apiLogin(data: {
  name: string;
  password: string;
}): PromiseLike<{ header: any; body?: any }> {
  // return curryRequest("login", "post", "user", "login", data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        header: {
          code: 0,
          msg: "成功",
        },
        body: {
          name: `小明${data.name}`,
          roles: ["admin", "集团管理员"],
        },
      });
    });
  });
}

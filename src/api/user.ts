import request from "../utils/request";
type Method =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH"
  | "purge"
  | "PURGE"
  | "link"
  | "LINK"
  | "unlink"
  | "UNLINK";
const curryRequest = (
  url: string,
  method: Method,
  trModuleCode: string,
  trCode: string,
  data: Record<string, unknown>
) => {
  return request(`module/user/${url}`, method, trModuleCode, trCode, data);
};
// 用户信息
export function apiUserInfo(data: Record<string, unknown>) {
  return curryRequest("userInfo", "post", "user", "userInfo", data);
}

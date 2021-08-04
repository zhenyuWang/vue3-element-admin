import axios from "axios";
import { Message } from "element3";
// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 10000,
});
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.header.code !== 0) {
      Message.error(res.header.msg || "Error");
      return Promise.reject(new Error(res.header.msg || "Error"));
    }
    return res;
  },
  (error) => {
    console.log("err" + error); // for debug
    Message.error("错了哦，这是一条错误消息");
    return Promise.reject(error);
  }
);
/**
 * 封装接口请求方法
 * @param url 域名后需补齐的接口地址
 * @param method 接口请求方式
 * @param trModuleCode data.header下的交易模块编号
 * @param trCode data.header下的交易编号
 * @param transTime data.header下的当前时间年-月-日 时:分:秒
 * @param transNo data.header下的随机16位字符串
 * @param body data下请求数据体
 */
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
const request = (
  url: string,
  method: Method,
  trModuleCode: string,
  trCode: string,
  body: Record<string, unknown>
) => {
  // const request = (url, method, trModuleCode, trCode, body) => {
  return service({
    url,
    method,
    headers: {},
    data: {
      header: {
        trModuleCode,
        trCode,
      },
      body,
    },
  });
};
export default request;

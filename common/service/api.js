import Http from './http';
import config from "./config";

const http = new Http();
http.config.baseURL = config.baseURL;
http.config.debug = false;
http.config.notOptions = true;
const { upload, get, post } = http;

// 请求拦截器
http.interceptor.request = config => {
  console.log(config)
  return config;
}
// 响应拦截器
http.interceptor.response = response => {
	console.log(response)
  // 如果使用token登录，请设置token
  // if (response.data.msg == "request login is successed") {
  //   uni.setStorageSync("token", response.data.data.token);
  // }
	return response;
}

const test = data => get("ajax/echo/text?name=uni-app", data)
export {
	test
}

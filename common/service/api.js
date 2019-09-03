import Http from './http';
import config from "./config";

const http = new Http();
http.config.baseURL = config.baseURL;
const { upload, get, post } = http;

// 请求拦截器
http.interceptor.request = config => {
  console.log(config)
  	// if (config.method.toUpperCase() === "POST") {
    //   config.data = qs.stringify(config.data);
    // }
    // token 放在headers中会变成复杂请求，多一次options请求；body或者query则不会
    // const token = uni.getStorageSync("token");
    // if (token) config.headers["token"] = token;
    return config;
}
// 响应拦截器
http.interceptor.response = response => {
	console.log(response)
	// if (response.config.url.indexOf("users/login") != -1 && response.data.code == 200) {
	// 	uni.setStorageSync({
	// 		key: "token",
	// 		data: response.data.data.token
	// 	})
	// }
	return response;
}

const test = data => get("ajax/echo/text?name=uni-app", data)
export {
	test
}

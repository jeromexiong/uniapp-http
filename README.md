# 封装 Uniapp 类axios方式的Promise网络请求库
完成`get`,`post`,`put`,`delete`,`upload`,`intercepter`

## How to use?
```
import Http from "http";
const http = new Http();
// 配置默认设置
http.config.baseURL = config.baseURL;
//解构方式获取class方法
const { upload, get, post } = http;

// Promise API 请求
export const test = data => get("ajax/echo/text?name=uni-app", data);

// 如果想要全局使用，请在main.js文件中挂载
import * as api from './common/service/api.js'
Vue.prototype.$api = api

// call the method
this.$api.test({ noncestr: Date.now() })
// or
test({ noncestr: Date.now() });
```

## intercepter 拦截器
```
// 请求拦截器
http.interceptor.request = config => {
  console.log(config)
    // if (config.method === "post") {
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
```
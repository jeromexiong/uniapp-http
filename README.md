# 封装 Uniapp 类axios方式的Promise网络请求库
完成`get`,`post`,`put`,`delete`,`upload`,`intercepter`

⚠️如若在微信小程序中使用，请替换`uni.` 为 `wx.`

## How to use?
```
import Http from "http";
const http = new Http();
// 配置默认设置
http.config.baseURL = config.baseURL;
// 是否打开日志
http.config.debug = false;
// token是否放在请求体中
http.config.notOptions = true;
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
```
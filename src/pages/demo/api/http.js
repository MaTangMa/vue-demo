/**
 * 此文件为对axios的封装
 */
import axios from 'axios'
import 'es6-promise/auto.js'

/**
 * 兼容form-data方式需设置请求头，进行数据转换
 * 若后端接口为`application/x-www-form-urlencoded`可打开
 */
// import qs from 'qs'
// 请求头
// axios.defaults.headers = {
//   'Content-Type': 'application/x-www-form-urlencoded'
// }
// axios.defaults.transformRequest = [function (data) {
//   data = Qs.stringify(data)
//   return data
// }]
// axios.defaults.headers = {
//     'Content-Type': 'application/json'
//   }

// 超时时间
// axios.defaults.timeout = 15000

// 携带cookie
axios.defaults.withCredentials = true
// 全局返回值判断，集成cas重定向
axios.interceptors.response.use((response) => {
  if (response.data) {
    if ("999" === response.data.code) {
      let url = response.data.data.substring(0, response.data.data.indexOf("service="))+ "systemid="+systemid+"&service=";
      window.location = url + window.location;
      //window.location =response.data.data+"-URL-"+window.location;
    }
  }
    return response;
}, function (data) {
  return Promise.reject(data);
});
// 设置headers头
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * @name http 封装axios
 * @param {string} url 请求地址
 * @param {object} data 数据，默认为{}
 * @param {string} method 请求方式，默认为post
 */
const http = (url, data = {}, method = 'POST') => {
  let param = "";
  if (method == "get" || method == "GET") {
    param = data;
  }
  return new Promise((resolve, reject) => {
    axios(
      {
      method: method,
      url: url,
      params: param,
      data: data,
      responseType: 'json'
    }
  ).then(function (response) {
      resolve(response)
      /**
       * 针对后端请求状态码做预处理,
       * 可根据需要修改并注释掉上方resolve(response)
       */
      // const data = response.data;
      // const code = data.code;
      // if (code == '0') {
      //   // 返回结果供vue实例.then使用
      //   resolve(data)
      // } else {
           // 返回错误信息供vue实例catch使用，或在此直接处理
      //   reject(data.msg)
      // }
    }).catch(function (error) {
      reject(error)
    })
  })
}

export default http

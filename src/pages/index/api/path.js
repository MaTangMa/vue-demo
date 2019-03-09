/**
 * 此文件配置请求地址
 */
import Vue from 'vue'
const serverUrl = require('../../../../static/config/serverConfig')
Vue.prototype.$serverUrl = serverUrl
const path = {
  // 登录用户
  getLoginPermission: serverUrl + 'getLoginPermission', // 获取登录用户权限
  getLoginInfo: serverUrl + 'getLoginUser', // 获取用户信息
}

export default path

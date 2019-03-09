/**
 * 此文件配置所有请求并导出
 * 各组件需要服务时
 * import { loginServer } from 'xxx/api/index'
 */
import http from './http'
import path from './path'

// 登录用户权限
function getLoginPermission(data, method) {
  return http(path.getLoginPermission, data, method)
}
// 登录用户信息
function getLoginInfo(data, method) {
  return http(path.getLoginInfo, data, method)
}
// export default test
export {
  http, getLoginInfo,
  getLoginPermission
}

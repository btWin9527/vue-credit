/*
* 配置项目域名
* */
const baseUrl = {
  development: {
    baseUrl: 'http://47.96.117.121:5003/',// baseUrl,
    // 多个域名的情况
    // extraUrl:'http://www.baidu.com',
    prefix:'api/'
  },
  test: {
    baseUrl: 'http://47.96.117.121:5003/',// baseUrl,
    // 多个域名的情况
    // extraUrl:'http://www.baidu.com',
  },
  production: {
    baseUrl: 'http://47.96.117.121:5003/',// baseUrl,
    // 多个域名的情况
    // extraUrl:'http://www.baidu.com',
  },
}
export default baseUrl

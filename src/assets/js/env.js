// 配置编译环境和线上环境之间的切换
// baseUrl: 域名地址
// routerMode: 路由模式

let baseUrl = '';
if (process.env.NODE_ENV == 'development') {
  baseUrl = 'http://edu0370.com';
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = 'http://edu0370.com';
}
export {
  baseUrl
}

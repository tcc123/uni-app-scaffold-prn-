import Interceptor from "./core/interceptor";
import Request from "./index";
import Token from '../../utils/token.js';

export const globalInterceptor = {
  request: new Interceptor(),
  response: new Interceptor()
};

/**
 * 全局配置
 * 只能配置 静态数据
 * `content-type` 默认为 application/json
 * `header` 中`content-type`设置特殊参数 或 配置其他会导致触发 跨域 问题，出现跨域会直接进入响应拦截器的catch函数中
 */
export const config = {
  baseURL: feConfig.api.base,
  header: {
    // 'X-Auth-Token': 'xxxx',
    // contentType: "application/x-www-form-urlencoded"
    'Content-Type': 'application/json'
  }
};

/**
 * 全局 请求拦截器, 支持添加多个拦截器
 * 例如: 配置token、添加一些默认的参数
 *
 * `return config` 继续发送请求
 * `return false` 会停止发送请求，不会进入错误数据拦截，也不会进入请求对象中的catch函数中
 * `return Promise.reject('xxxxx')` 停止发送请求, 会错误数据拦截，也会进入catch函数中
 *
 * @param {Object} config 发送请求的配置数据
 */
globalInterceptor.request.use(
  config => {
    uni.showLoading({ title: '加载中', mask: true });
    getToken() && (config.header.token = getToken());
    getCookie() && (config.header.cookie = getCookie());
    return config;
  },
  err => {
    showToast(err);
    uni.hideLoading();
    return false;
  }
);

/**
 * 全局 响应拦截器, 支持添加多个拦截器
 * 例如: 根据状态码选择性拦截、过滤转换数据
 *
 * `return res` 继续返回数据
 * `return false` 停止返回数据，不会进入错误数据拦截，也不会进入catch函数中
 * `return Promise.reject('xxxxx')` 返回错误信息, 会错误数据拦截，也会进入catch函数中
 *
 * @param {Object} res 请求返回的数据
 * @param {Object} config 发送请求的配置数据
 * @return {Object|Boolean|Promise<reject>}
 */
globalInterceptor.response.use(
  async(res, config) => {
    let data = res.hasOwnProperty('data') ? res.data : res.hasOwnProperty('Data') ? res.Data : null; // eslint-disable-line
    let code = data.hasOwnProperty('code') ? data.code : data.hasOwnProperty('Code') ? data.Code : null; // eslint-disable-line
    saveCookie(res.header['set-cookie'] || res.header['Set-Cookie']);
    try {
      return await handleCode({ data, code, config });
    } catch (err) {
      uni.hideLoading();
      return Promise.reject(err);
    }
  },
  (err) => {
    showToast(err.msg || err.Msg || err);
    return Promise.reject(err);
  }
);

/**
 * 重新请求更新获取 `token`
 * @return {Promise}
 */
function getApiToken() {
  return Token.getToken().then((res) => {
    return res.token;
  });
}

/**
 * 获取 `localStorage` 中的 `token`
 * @return {string} token字符串
 */
function getToken() {
  return uni.getStorageSync('token');
}

/**
 * 保存 `token` 到  `localStorage`
 * @param {string} token token字符串
 * @return {void}
 */
function saveToken(token) {
  uni.setStorageSync('token', token);
}

/**
 * 获取 `localStorage` 中的 `cookie`
 * @return {string} cookie字符串
 */
function getCookie() {
  return uni.getStorageSync('cookie');
}

/**
 * 保存 `cookie` 到  `localStorage`
 * @param {string} cookie cookie字符串
 * @return {void}
 */
function saveCookie(cookie) {
  cookie ? uni.setStorageSync('cookie', cookie) : '';
}

/**
 * 处理 http状态码
 * @param {object} o
 * @param {object} o.data 请求返回的数据
 * @param {object} o.config 本次请求的config数据
 * @param {string|number} o.code http状态码
 * @return {object|Promise<reject>}
 */
function handleCode({ data, code, config }) {
  const STATUS = {
    '0'() { // 请求成功
      return data;
    },
    '1000'() { // token过期，重新获取token
      // 只让这个实例发送一次请求，如果code还是1000则抛出错误
      if (config.count === 1) {
        return Promise.reject({ code, msg: '请求未授权' });
      }
      config.count++; // count字段自增，可以用来判断请求次数，避免多次发送重复的请求
      config.url = config.instanceURL; // 重置 config的相对地址，避免 `params` 多次添加
      return getApiToken().then(saveToken).then(() => Request().request(config));
    },
    '1101'() { // cookie过期，跳转到登录页面
      uni.reLaunch({ url: feConfig.login });
      return Promise.reject({ code, msg: '登录过期' });
    }
  };
  uni.hideLoading();
  return STATUS[code] ? STATUS[code]() : Promise.reject(data, config); // 有状态码但不在这个封装的配置里，就直接进入 `fail`
}

/** 
  * 显示消息提示框
  * @param {String} msg 
  * @return {void}
*/
function showToast(msg) {
  uni.showToast({
      title: JSON.stringify(msg),
      icon: 'none',
      duration: 2000
  });
}
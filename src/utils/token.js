import Request from '../plugins/request/index.js';
import promisify from './promisify.js';

/**
 * 获取token
 */
const getToken = () => {
  let login = promisify(uni.login);
  //#ifndef H5
  return login().then( resCode => {
    return Request().post(feConfig.token, {
      data: {
        grant_type: 'wx_login',
        username: feConfig.appid,
        password: resCode.code
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + feConfig.client_base64
      },
    });
  });
  //#endif
};


module.exports = {
  getToken
};
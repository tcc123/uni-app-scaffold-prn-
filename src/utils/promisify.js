// 小程序普通函数转promise
module.exports = fn => {
  return function(obj = {}) {
    return new Promise((resolve, reject) => {
      fn({...obj, success(res) {resolve(res);}, fail(res) {reject(res);}});
    });
  };
};
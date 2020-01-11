/**
* 时间戳转日期时间
* @param {Number} time: 时间戳
* @param {String} format: 日期时间格式
* 使用方式: timestampToTime(1557285692393, 'Y-M-D h:m:s') // 2019-05-08 11:21:32
*/
function timestampToTime(time, format) {
  let timestamp;
  timestamp = time.length === 10 ? time * 1000 : time;
  if (!format) {
    format = "Y-M-D h:m:s";
  }
  let formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  let returnArr = [];
  let date = new Date(timestamp);
  returnArr.push(date.getFullYear());
  let m = date.getMonth() + 1;
  returnArr.push(m < 10 ? ('0' + m) : m);
  let d = date.getDate();
  returnArr.push(d < 10 ? ('0' + d) : d);
  let h = date.getHours();
  returnArr.push(h < 10 ? ('0' + h) : h);
  m = date.getMinutes();
  returnArr.push(m < 10 ? ('0' + m) : m);
  let s = date.getSeconds();
  returnArr.push(s < 10 ? ('0' + s) : s);
  for (let i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}

/**
* 时间戳转日期时间
* @param {Number} time: 时间戳
* @param {String} formatDay: 日期时间格式
* 使用方式: formatDay(1557285692393, 'Y年M月D日') // 2019年5月8日
*/
function formatDay(time, day) {
  let timestamp;
  timestamp = time.length === 10 ? time * 1000 : time;
  if (!day) {
    day = "Y日M月D日";
  }
  let formateArr = ['Y', 'M', 'D'];
  let returnArr = [];
  let date = new Date(timestamp);
  returnArr.push(date.getFullYear());
  let m = date.getMonth() + 1;
  returnArr.push(m);
  let d = date.getDate();
  returnArr.push(d);
  for (let i in returnArr) {
    day = day.replace(formateArr[i], returnArr[i]);
  }
  return day;
}

function getCookie(key) {
  let objCookie = {};
  let arrCookie = document.cookie.split(';') || [];
  arrCookie.forEach(item => {
    let arrItem = item.split('=');
    objCookie[arrItem[0].trim()] = arrItem[1];
  });
  return objCookie[key];
}


// 对外暴露方法和内容
module.exports = {
  timestampToTime: timestampToTime, // 时间戳转日期时间
  formatDay: formatDay, //时间戳转换日期格式（年月日）
  getCookie: getCookie
};
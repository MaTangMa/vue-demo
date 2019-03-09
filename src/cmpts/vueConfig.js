const EARTH_RADIUS = 6378.137;
function rad(d) {
  return d * Math.PI / 180.0;
}

export default {

  install(Vue, options) {
    function isvalidPhone(str) {
      const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
      return reg.test(str)
    }
    // 普通电话验证
    function isvalidTelephone(str) {
      const reg = /^\d{0,11}$/
      return reg.test(str)
    }
    function isvalidLonLat(str) {
      const reg = /^\d{1,3}.\d{1,6}$/
      return reg.test(str)
    }
    function isvalidStaffName(str) {
      const reg = /^[\u4e00-\u9fa5A-Za-z]{1,20}$/
      return reg.test(str)
    }
    Vue.prototype.pageConfig = {
      currentPage: 1,
      pageSize: 10,
      pageSizes: "[10, 20, 30, 50]",
      total: 0,
      // layout:"total, sizes, prev, pager, next, jumper"
      layout: "total, prev, pager, next, jumper"
    };
    Vue.prototype.validPhone = function (rule, value, callback) {
      if (!value) {
        callback(new Error('请输入联系方式'))
      } else if (!isvalidPhone(value)) {
        callback(new Error('请输入正确的11位手机号码'))
      } else {
        callback()
      }
    }
    Vue.prototype.validObjectPhone = function (rule, value, callback) {
      if (!value.phone) {
        callback()
      } else if (!isvalidPhone(value.phone)) {
        callback(new Error('请输入正确的11位手机号码'))
      } else {
        callback()
      }
      if (!value.staffnm) {
        callback()
      } else if (value.staffnm.length>50) {
        callback(new Error('最多输入50个字符'))
      } else {
        callback()
      }
      if (!value.duty) {
        callback()
      } else if (value.duty.length>50) {
        callback(new Error('最多输入50个字符'))
      } else {
        callback()
      }
    }
    Vue.prototype.validTelephone = function (rule, value, callback) {
      if (!value) {
        callback()
      } else if (!isvalidTelephone(value)) {
        callback(new Error('请输入正确的电话号码'))
      } else {
        callback()
      }
    }
    Vue.prototype.length50NotNull = function (rule, value, callback) {
      if (!value) {
        callback(new Error("请输入内容，最多50个字符"))
      } else if (value.length>50) {
        callback(new Error('最多输入50个字符'))
      } else {
        callback()
      }
    }
    Vue.prototype.length50 = function (rule, value, callback) {
      if (!value) {
        callback()
      } else if (value.length>50) {
        callback(new Error('最多输入50个字符'))
      } else {
        callback()
      }
    }
    Vue.prototype.length50Lvnm = function (rule, value, callback) {
      if (!value.staffnm) {
        callback()
      } else if (value.staffnm.length>50) {
        callback(new Error('最多输入50个字符'))
      } else {
        callback()
      }
    }
    Vue.prototype.length50Duty = function (rule, value, callback) {
      if (!value.duty) {
        callback()
      } else if (value.duty.length>50) {
        callback(new Error('最多输入50个字符'))
      } else {
        callback()
      }
    }
    Vue.prototype.length200NotNull = function (rule, value, callback) {
      if (!value) {
        callback(new Error("请输入内容"))
      } else if (value.length>200) {
        callback(new Error('最多输入200个字符'))
      } else {
        callback()
      }
    }
    Vue.prototype.length200 = function (rule, value, callback) {
      if (!value) {
        callback()
      } else if (value.length>200) {
        callback(new Error('最多输入200个字符'))
      } else {
        callback()
      }
    }
    Vue.prototype.isvalidLatLon = function (rule, value, callback) {
      if (!value) {
        callback()
      } else if (!isvalidLonLat(value)) {
        callback(new Error('请输入正确数据，如113.462156'))
      } else {
        callback()
      }
    }
    Vue.prototype.isvalidStaffName = function (rule, value, callback) {
      if (!value) {
        callback(new Error("请输入姓名"))
      } else if (!isvalidStaffName(value)) {
        callback(new Error('请输入20个以内中英文字符'))
      } else {
        callback()
      }
    }
    Vue.prototype.isvalidPwd= function (rule, value, callback) {
      if (!value) {
        callback()
      } else if (value.length>16) {
        callback(new Error('最多输入16个字符'))
      } else {
        callback()
      }
    }
    Vue.mixin({
      data() {
        return {}
      }, methods: {
        dateformatter(row, column) {
          return this.format(row[column.property], "yyyy-MM-dd");
        }
      }
    })

    Vue.filter('format', function (v1, fmt) {
      if (!v1)
        return;
      let a = v1.replace(/\s+/g, 'T')
      let date = new Date(a)
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      }
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + ''
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length))
        }
      }
      return fmt
    });
    Vue.prototype.format = Vue.filter('format');
    //判断Adcd形式，处理
    Vue.prototype.UserAdcdCheck = function (AdCd) {
      if (AdCd != null) {
        //判断Adcd级别
        if (AdCd.substr(2, 2) == "00")
          return {
            adcd: AdCd.substr(0, 2) + "__" + AdCd.substr(4),
            subLen: 4
          };
        else if (AdCd.substr(4, 2) == "00")
          return {
            adcd: AdCd.substr(0, 4) + "__" + AdCd.substr(6),
            subLen: 6
          };
        else if (AdCd.substr(6, 2) == "00")
          return {
            adcd: AdCd.substr(0, 6) + "__" + AdCd.substr(8),
            subLen: 8
          };
        else if (AdCd.substr(8, 2) == "00")
          return {
            adcd: AdCd.substr(0, 8) + "__" + AdCd.substr(10),
            subLen: 10
          };
        else
          return {
            adcd: AdCd.substr(0, 10) + "__",
            subLen: 12
          };
      }
    }
    //判断Adcd形式，处理
    Vue.prototype.GetDistance = function (long1, lat1, long2, lat2) {
      let a, b, d, sa2, sb2;
      lat1 = rad(lat1);
      lat2 = rad(lat2);
      a = lat1 - lat2;
      b = rad(long1 - long2);

      sa2 = Math.sin(a / 2.0);
      sb2 = Math.sin(b / 2.0);
      d = 2 * EARTH_RADIUS
        * Math.asin(Math.sqrt(sa2 * sa2 + Math.cos(lat1)
          * Math.cos(lat2) * sb2 * sb2));
      return Math.round(d * 10000) / 10000;
    }
  }
}


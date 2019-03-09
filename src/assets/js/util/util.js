// 判断输入时间范围是否合法
function judgeData(start, end){
    if(start || end){
        if(!start || !end){
            return
        }
    }
    if(start > end){
        return  '请选择有效范围'
    }
}
// 时间转换
function dateFormat (fmt, date) { // author: meizz
    var o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(),                    // 日
      'h+': date.getHours(),                   // 小时
      // 'H+': date.getUTCHours(),
      'm+': date.getMinutes(),                 // 分
      's+': date.getSeconds(),                 // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S': date.getMilliseconds()             // 毫秒
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  }

// 判断图片文件类型 传入文件及限制大小kb
function judgeImg (file, size) {
  alert('name:'+ file.name)
    var lastGroup = file.name.split('.').length - 1
    const extension = file.name.split('.')[lastGroup] === 'jpg'
    const extension2 = file.name.split('.')[lastGroup] === 'jpeg'
    const extension3 = file.name.split('.')[lastGroup] === 'png'
    const extension4 = file.name.split('.')[lastGroup] === 'bmp'
    const extension5 = file.name.split('.')[lastGroup] === 'gif'
    // const isLt2M = file.size / 1024 < size
    if (!extension && !extension2 && !extension3 && !extension4 && !extension5) {
      console.log('请选择图片文件!')
    }
    // if (!isLt2M) {
    //   console.log('大小不能超过 500KB!')
    // }&& isLt2M
    return (extension || extension2 || extension3 || extension4 || extension5) 
  }
  
// 重新封装一河一档数据,以逗号分隔
function fromatDate (data) {
  let newData = []

  console.log('原始数据：'+JSON.stringify(data))
  if(!data) {
    return null
  } else {
    for (var i = 0; i < data.length; i++) {
      let str = data[i].fileVresion
      let strArr = str.split(',')
      data[i].fileVresion = strArr
      let url = []
      let reId = []
      let version = []
      // version = strArr
      reId = data[i].reId.split(',')
      // console.log(JSON.stringify(reId))
      url = data[i].neFilesbEntities[0].fileUrl.split(',')
      // console.log(JSON.stringify(url))
      let currArr = []
      for(let a=0; a<strArr.length; a++) {
        let currObj1 = {
          version: '',
          value:{
            reId: '',
            url: ''
          }
        }
        currObj1.version = strArr[a]
        currArr[a] = currObj1
      }
      for(let b=0; b<url.length; b++) {
        currArr[b].value.url = url[b]
      }
      for(let c=0; c<reId.length; c++) {
        currArr[c].value.reId = reId[c]
      }
      data[i].newRecordInfo = currArr
      // data[i].versionValue = data[i].newRecordInfo[0]
      data[i].versionValue = {"version":"","value":{"reId":"","url":""}}
    }
    return data
  }
}

function getType (diction,type) {
  let typeArray = []
  for(let i=0;i<diction.length; i++){
    if(diction[i].groupZd == type){
      typeArray.push(diction[i])
    }
  }
  return typeArray
}
export{
    judgeData,dateFormat,judgeImg,fromatDate,getType
}
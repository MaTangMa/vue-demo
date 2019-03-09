// 政区树封装数据


function getTree(arr,aidiId){
    let treeList = []
    for (let i=0; i<arr.length; i++) {
        let id = arr[i].aidiId
        if (aidiId) {
            if (arr[i].aidiId == aidiId) {
                arr[i].children = []
                treeList.push(arr[i])
            }
        } else {
            if (arr[i].pAidiId == '' || arr[i].pAidiId==null) {
                arr[i].children = []
                treeList.push(arr[i])
            }
        }
        
    }
    // arr.forEach(element => {
    //     if (element.aidiId == aidiId) {
    //         element.children = []
    //         treeList.push(element)
    //     }
    // });
    let obj = chiFun(treeList[0],arr)
    treeList = []
    treeList.push(obj)
    return jsonChange(treeList)
}

function chiFun(chiObj,arr) {
    arr.forEach(element => {
        if (element.pAidiId == chiObj.aidiId) {
            element.children = []
            chiObj.children.push(element)
        }
    })
    for (let i=0; i<chiObj.children.length; i++) {
        let id = chiObj.children[i]
        chiFun(chiObj.children[i],arr)
    }
    return chiObj
}
// 去除空的children，否则显示异常
function jsonChange(arr){
    if(arr&&arr.length>0){
      arr.forEach(element => {
          if(element.children&&element.children.length==0){
              delete element.children
          }else{
              jsonChange(element.children)
          }
      });
      return arr
    }
  }
// 查询上级 用于级联选择回显
function getAidiArr(aidiList, aidi, resultArr) {
    if (aidi != '') {
        resultArr.push(aidi)
    }
    for (let i=0; i<aidiList.length; i++) {
      let pid = aidiList[i].pAidiId;
      if (aidiList[i].aidiId == aidi) {
        getAidiArr(aidiList, aidiList[i].pAidiId,resultArr)
      }
    }
    return resultArr
  }

export{
    getTree,getAidiArr
}
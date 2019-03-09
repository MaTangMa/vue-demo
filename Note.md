# 笔记
1. 异步组件
```
{
    components: {
        // resolve成功 reject失败
        custom: (resolve, reject) => {
            resollve(require('path'))
        }
    }
}
```
2. webpack代码分隔
require.ensure代码块
    用require.ensure([依赖]，回调函数， [chunk名字])
    或import() 函数 但是import没有第二个参数，无法打包多个组件
import还在更新中，可以看webpack官网内容
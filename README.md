# 框架结构
```
│  package-lock.json 项目描述锁定文件，可维持项目稳定
│  package.json      项目描述文件
│  README.md         项目说明文件
│  
├─build
│      build.js              构建脚本
│      check-versions.js     开发环境版本监测脚本
│      utils.js              多页面配置及其他配置
│      vue-loader.conf.js    vue-loader插件配置(解析.vue组件)
│      webpack.base.conf.js  开发与生产环境构建通用配置
│      webpack.dev.conf.js   开发环境构建配置
│      webpack.prod.conf.js  生产环境构建配置
│      
├─config              构建配置目录
│      dev.env.js     可配置开发与生产环境常量
│      index.js
│      prod.env.js
│      
├─dist       生产环境代码，未运行npm run build时不存在
│              
├─node_modules      项目依赖
|                  
├─src        项目源代码
|    ├─assets        公共资源文件
|    │              
|    ├─cmpts         组件
|    |                  
|    ├─pages         页面           
|    │                  
|    └─static     静态文件目录
│                  
└─static     静态文件目录

```
# index下页面结构
├─api        服务api配置
│              
├─router     路由配置
|                  
├─store      vuex数据状态管理配置           
│  
├─views      具体页面
|
├─app
|
├─index.html
|                
└─index.js
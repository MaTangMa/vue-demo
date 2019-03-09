import Vue from 'vue'
import Router from 'vue-router'

// 主页公用
import home from '../views/Home.vue'
import RiverLevel from '../views/waterSupervise/RiverLevel.vue'
import Rainwater from '../views/rainwater/Rainwater.vue'
import OtherSys1 from '../views/otherSys/OtherSys1.vue'
import OtherSys2 from '../views/otherSys/OtherSys2.vue'
import OtherSys from '../views/otherSys/OtherSys.vue'
// import dispatchScheme from '../views/dispatchScheme/dispatchScheme.vue'
// import forecastScheme from '../views/forecastScheme/forecastScheme.vue'
// import emergencyScheme from '../views/emergencyScheme/emergencyScheme.vue'
import statistic from '../views/statistic/statistic.vue'

// import user from '../views/test/user'
// import account from '../views/test/Account'
import study from '../views/test/user/Study'
import work from '../views/test/user/Work'
import hobby from '../views/test/user/Hobby'
import accountNav from '../views/test/account/MngNav'

// webpack代码分隔异步加载
let user = (resolve) => {
  return require.ensure([], () => {
    resolve(require('../views/test/user'))
  }, 'ua')  // 第三个参数可把多个组件打包成一个js文件
}
let account = (resolve) => {
  return require.ensure([], () => {
    resolve(require('../views/test/Account'))
  }, 'ua')
}
let dispatchScheme = (resolve) => {
  return require.ensure([], () => {
    resolve(require('../views/dispatchScheme/dispatchScheme.vue'))
  })
}
let forecastScheme = (resolve) => {
  return require.ensure([], () => {
    resolve(require('../views/forecastScheme/forecastScheme.vue'))
  })
}
let emergencyScheme = (resolve) => {
  return import('../views/emergencyScheme/emergencyScheme.vue')
}

Vue.use(Router)
const router = new Router({
  mode: 'history',
  linkActiveClass: 'isActive', // 预留key值，自己设置class
  // 定位页面滚动坐标，浏览器好像自带了
  scrollBehavior (to, from, savePosition) {
    // 切换路由或者前进后退时（）
    console.log(to) // 要进入的目标路由对象
    console.log(from) // 离开的路由对象
    console.log(savePosition) // 滚动条坐标
    // if (savePosition) {
    //   return savePosition
    // } else {
    //   return {x: 0, y: 0}
    // }
    console.log('hash:' + to.hash)
    if (to.hash) {
      return {selector: to.hash}
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      redirect: '/home/RiverLevel',
      children: [{
        path: 'RiverLevel',
        name: 'RiverLevel',
        component: RiverLevel
      }, {
        path: 'Rainwater',
        name: 'Rainwater',
        component: Rainwater
      }, {
        path: 'statistic',
        name: 'statistic',
        component: statistic
      }, {
        path: 'dispatchScheme',
        name: 'dispatchScheme',
        component: dispatchScheme
      }, {
        path: 'forecastScheme',
        name: 'forecastScheme',
        component: forecastScheme
      }, {
        path: 'emergencyScheme',
        name: 'emergencyScheme',
        component: emergencyScheme
      }]
    }, {
      path: '/OtherSys1',
      name: 'OtherSys1',
      component: OtherSys1
    }, {
      path: '/OtherSys2',
      name: 'OtherSys2',
      component: OtherSys2
    }, {
      path: '/OtherSys',
      name: 'OtherSys',
      component: OtherSys
    }, {
      path: '/user',
      // name: // 如果有默认子路由，不要设置name 否则浏览器中有警告
      component: user,
      children: [{
        path: '', // 默认
        name: 'study',
        component: study
      }, {
        path: '/work',  // 加上斜杠就没有user/work了，直接为work
        name: 'work',
        component: work
      }, {
        path: 'hobby',
        name: 'hobby',
        component: hobby
      }]
    }, {
      path: '/account',
      name: 'account',
      alias: '/a', // 别名 要注意路由的匹配与别名一致
      components: {
        default: account,
        nav: accountNav
      }
    }, {
      // 未知路径重定向
      path: '*',
      name: '',
      // component: home
      // redirect: 'home/RiverLevel'
      // redirect: {path: '/home'},
      // redirect: {name: '/home'},
      redirect: (to) => {
        console.log(to)
        // 根据不同路径进行重定向
        if (to.path === '/home/RiverLevel') {
          return '/home/RiverLevel'
        } else if (to.path === '/index') {
          return '/home/RiverLevel'
        }
      }
    }
  ]
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

// 主页公用
import home from '../views/Home.vue'
import RiverLevel from '../views/waterSupervise/RiverLevel.vue'
import Rainwater from '../views/rainwater/Rainwater.vue'
import OtherSys1 from '../views/otherSys/OtherSys1.vue'
import OtherSys2 from '../views/otherSys/OtherSys2.vue'
import OtherSys from '../views/otherSys/OtherSys.vue'
import dispatchScheme from '../views/dispatchScheme/dispatchScheme.vue'
import forecastScheme from '../views/forecastScheme/forecastScheme.vue'
import emergencyScheme from '../views/emergencyScheme/emergencyScheme.vue'
import statistic from '../views/statistic/statistic.vue'

Vue.use(Router)
const router = new Router({
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
      },{
        path: 'Rainwater',
        name: 'Rainwater',
        component: Rainwater
      },{
        path: 'statistic',
        name: 'statistic',
        component: statistic
      },{
        path: 'dispatchScheme',
        name: 'dispatchScheme',
        component: dispatchScheme
      },{
        path: 'forecastScheme',
        name: 'forecastScheme',
        component: forecastScheme
      },{
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
    }
  ]
})

export default router

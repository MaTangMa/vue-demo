<template>
  <div class="page">
    <!-- 页面标题栏 -->
    <div class="box">
      <!-- 左边导航条 -->
      <div class="navmenu">
        <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>水雨情监视管理</span>
            </template>
            <el-menu-item index="1-1" @click="routerPush('RiverLevel')">实时雨水情</el-menu-item>
            <el-menu-item index="1-2" @click="routerPush('Rainwater')">水位预测</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" @click="routerPush('statistic')">
            <i class="el-icon-setting"></i>
            <span slot="title">统计分析</span>
          </el-menu-item>
          <el-menu-item  index="4" @click="routerPush('forecastScheme')">
              <i class="el-icon-setting"></i>
            <span slot="title">预报方案管理</span>
          </el-menu-item >
          <el-menu-item index="5" @click="routerPush('dispatchScheme')">
            <i class="el-icon-setting"></i>
            <span slot="title">调度方案管理</span>
          </el-menu-item>
          <el-menu-item index="6" @click="routerPush('emergencyScheme')">
            <i class="el-icon-setting"></i>
            <span slot="title">应急预案方案管理</span>
          </el-menu-item>
        </el-menu>
      </div>
      <!-- 右边内容区 -->
      <div class="content">
        <div class="breadcrumb-div">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import header from "@/cmpts/TotalHeader.vue"
import { mapGetters, mapActions } from "vuex"
import { } from "@/pages/index/api/index"

export default {
  data () {
    return {
      loginPermission: [],
      reservoirModule: [{
        name: 'first'
      }, {
        name: 'second'
      }],

    };
  },
  components: {
    "header-bar": header
  },
  methods: {
    ...mapActions([
      'updateReservoir'
    ]),
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    initStore () {
      this.updateReservoir(this.reservoirModule)
      this.$vlstore.set('reservoirData', this.reservoirModule[1].name)
    },
    routerPush (name) {
      this.$router.push({ name: name })
    },

  },
  created () {
    this.initStore()
  }
};
</script>
<style lang="less" scoped>
.page {
  .box {
    position: absolute;
    top: 74px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    overflow: auto;
    .navmenu {
      width: 200px;
      height: 100%;
      flex-wrap: nowrap;
      border-right: 1px solid #aabac1;
      overflow-y: auto;
      .el-menu {
        border: none;
      }
      // 更换图标的样式
      .iconSpan {
        display: inline-block;
        color: inherit;
        margin-right: 5px;
        width: 24px;
        height: 24px;
        text-align: center;
        font-size: 18px;
        vertical-align: middle;
        background: url(../../../assets/img/userIcon.png);
      }
    }
    /*滚动条样式*/
    .navmenu::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 1px; /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
    }
    .navmenu::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: rgba(0, 0, 0, 0.2);
    }
    .navmenu::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 0;
      background: rgba(0, 0, 0, 0.1);
    }
    .content {
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 210px;
      right: 0px;
      flex-wrap: nowrap;
      overflow: auto;
      .breadcrumb-div {
        border-bottom: 1px solid #e6e6e6;
        padding: 10px 10px;
        margin-bottom: 12px;
      }
    }
  }
}
</style>
<style >
</style>


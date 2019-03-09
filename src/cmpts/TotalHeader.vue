/**
 * 项目头
 * 目前只有背景
 * 提供一个slot
 */
<template>
  <header class="total-header">
    <div class="logo">
      <img src="../assets/img/header-icon.png" class="headerIcon" alt="logo">
    </div>
    <div class="titleDiv">
      <span>水库水电站预警及防汛抢护管理平台</span>
    </div>
    <slot />
    <div class="userInfo">
      <div class="userContent">
        <img src="../assets/img/user.png" alt="" width="25px" height="25px">
      </div>
      <div class="userContent">
        <span>欢迎您：{{ loginInfo.staffNm }}</span> 
      </div>
      <div class="userContent ex" @click="loginOut">
        <span>退出</span>
      </div>
    </div>
  </header>
</template>

<script>
import url from "@/pages/index/api/path.js";
export default {
  data() {
    return {
      loginInfo: {},
      outUrl: url.serverUrl
    };
  },
  methods: {
    loginOut() {
    },
    queryUser() {
    }
  },
  created() {
    this.queryUser()
  }
};
</script>

<style lang="less">
.total-header {
  position: relative;
  width: 100%;
  height: 74px;
  background: url(../assets/img/topbg.png);
  position: relative;
  .logo {
    position: absolute;
    left: 0px;
    top: 0px;
    background: url(../assets/img/topbg_left.png);
    width: 650px;
    height: 74px;
    .headerIcon{
      position: absolute;
      left: 40px;
      top: 18px;
    }
  }
  .titleDiv {
    z-index: 100;
    position: absolute;
    font-size: 24px;
    color: white;
    top: 25px;
    left: 100px;
  }
  .userInfo{
    z-index: 100;
    height: 30px;
    vertical-align: middle;
    position: absolute;
    color: white;
    top: 30px;
    right: 20px;
    .userContent{
      margin-left: 5px;
      vertical-align: middle;
      display: inline-block;
    }
    .ex{
      margin-left: 15px;
      border-bottom: 1px solid rgb(4, 210, 247);
      cursor: pointer;
      span{
        color: rgb(4, 210, 247);
      }
    }
  }
}
</style>

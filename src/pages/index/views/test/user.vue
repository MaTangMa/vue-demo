<template>
    <!-- 用户 user会与父组件router-view的class拼接-->
    <div class="user">
        关于我
        <hr>
        <div>
            <ul class="nav">
                <router-link tag="li" :to="{name: 'study'}" exact>
                    <a href="">study</a>
                </router-link>
                <router-link tag="li" :to="{name: 'work'}">
                    <a href="">work</a>
                </router-link>
                <router-link tag="li" :to="{name: 'hobby'}">
                    <a href="">hobby</a>
                </router-link>
            </ul>
        </div>
        <div class="content">
            <hr>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.user {
  .nav {
    li {
      float: left;
      font-size: 16px;
      height: 22px;
      line-height: 22px;
      text-align: center;
      a {
        color: #000000;
        cursor: pointer;
        text-decoration: none;
      }
    }
    li + li {
      margin-left: 40px;
    }
    li:hover,
    li:focus,
    .isActive {
      color: #000000;
      border-bottom: 1px solid #000000;
    }
  }
  .content {
      margin-top: 50px;
  }
}
</style>

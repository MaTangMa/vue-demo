<template>
  <div id="app" class="full-page" v-cloak>
    <header-bar>
      <div class="topMenu">
        <ul class="nav">
          <!-- routerlink 默认生成a标签 通过tag转换 event属性自定义事件，默认是点击时候切换
            exact精确匹配防止active错乱
          -->
            <!-- <a @click="menuClick('OurSys')">OurSys</a> -->
            
            <router-link :to="{path: '/home'}" exact tag="li" event="mouseover">
              <i></i>
              <span>home</span>
            </router-link>
            <!-- <a @click="menuClick('OtherSys1')">OtherSys1</a> -->
            <!-- 可以在行间添加自定义activeclass -->
            <router-link :to="{path: '/account#account'}" tag="li">
              <i></i>
              <span>account</span>
            </router-link>
          <li >
            <!-- <a @click="menuClick('OtherSys2')">OtherSys2</a> -->
            <router-link to="/user" tag="li">
              <i></i>
              <span>user</span>
            </router-link>
          </li>
          <li>
            <a href="http://171.16.1.102:8090/demo.html" target="_blank">demo</a>
          </li>
        </ul>
      </div>
    </header-bar>
    <!-- router-view上的class会给每个渲染的view加上class，不用每个都加了，会与组件内部的class拼接 -->
    <router-view class="full-page"/>
    <!-- 可以配置多个视图，在router中通过components中命名，使用name映射 -->
    <router-view name="nav"/>
  </div>
</template>

<script>
import header from "@/cmpts/TotalHeader.vue";
export default {
  name: "app",
  data() {
    return {
      activeMenu: "OurSys"
    };
  },
  components: {
    // 异步组件 甚至不用import进来
    headerBar: (resolve) => {
      setTimeout(() => {
        // resolve(header)
        resolve(require('@/cmpts/TotalHeader.vue'))
      }, 2000);
    }
  },
  methods: {
    menuClick(name) {
      this.activeMenu = name;
      if (name == "OurSys") {
        this.$router.push({ name: "home" });
      } else {
        this.$router.push({ name: name, params: { sysName: name } });
      }
    }
  }
};
</script>

<style lang="less">
.full-page {
  .topMenu {
    position: absolute;
    left: 550px;
    top: 26px;
    .nav {
      li {
        float: left;
        font-size: 16px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        a {
          color: #ffffff;
          cursor: pointer;
        }
      }
      li + li {
        margin-left: 40px;
      }
      li:hover,
      li:focus,
      .isActive {
        color: #ffffff;
        border-bottom: 1px solid #ffffff;
      }
    }
  }
}
</style>

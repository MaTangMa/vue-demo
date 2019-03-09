<template>
  <div id="app" class="full-page" v-cloak>
    <header-bar>
      <div class="topMenu">
        <ul class="nav">
          <li :class="{active: activeMenu=='OurSys'}">
            <a @click="menuClick('OurSys')">OurSys</a>
          </li>
          <li :class="{active: activeMenu=='OtherSys1'}">
            <a @click="menuClick('OtherSys1')">OtherSys1</a>
          </li>
          <li :class="{active: activeMenu=='OtherSys2'}">
            <a @click="menuClick('OtherSys2')">OtherSys2</a>
          </li>
        </ul>
      </div>
    </header-bar>
    <router-view />
  </div>
</template>

<script>
import header from "@/cmpts/TotalHeader.vue"
export default {
  name: 'app',
  data () {
    return {
      activeMenu: 'OurSys'
    }
  },
  components: {
    "header-bar": header
  },
  methods: {
    menuClick (name) {
      this.activeMenu = name
      if (name == 'OurSys') {
        this.$router.push({ name: 'home' })
      } else {
        this.$router.push({name: name, params: {sysName: name} })
      }
    }
  }
}
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
      .active {
        border-bottom: 1px solid #ffffff;
      }
    }
  }
}
</style>

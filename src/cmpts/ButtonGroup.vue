<template>
  <!-- 按钮组件 -->
  <div class="myButtonGroup">
    <el-button type="text" :class="{active: activeNum==-1}" @click="buttonClick(-1)">全部</el-button>
    <el-button type="text" class="forButton" :class="{active: activeNum==index}" :style="name.length > 7 ? 'width: 130px' : ''" 
    @click="buttonClick(index,name)" v-for="(name,index) in buttons" :key="index">{{name}}</el-button>
  </div>
</template>

<script>
export default {
  props: {
    buttons: Array
  },
  data () {
    return {
      all: 'active',
      activeNum: -1,
      ifLong: ''
    }
  },
  methods: {
    buttonClick (index, name) {
      // 点击切换样式
      this.activeNum = index
      this.$emit('getValue', index)
    },
  }
}
</script>

<style lang="less">
.myButtonGroup {
  display: inline-block;
  .el-button {
    margin: 0 15px;
    color: black;
    padding: 5px;
  }
  .active {
    background-color: rgb(25, 169, 123);
    color: white;
  }
  .forButton{
    width: 70px;
  }
}
</style>

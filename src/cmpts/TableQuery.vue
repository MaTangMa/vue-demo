/**
 * 表格查询部分
 * 只初始化header放大镜和查询部分
 * 提供一个slot，用来置入具体查询条件
 */
<template>
  <div class="form-query">
    <div class="query-header">
      <i class="el-icon-search"></i>
      <span>查询条件</span>
    </div>
    <div class="query-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.form-query {
  border: 1px solid rgb(152,203,203);
  border-radius: 5px;
  .query-header {
    height: 30px;
    line-height: 30px;
    padding-left: 8px;
    font-size: 18px;
    border-bottom: 1px rgb(202, 202, 202) solid;
    i {
      color: rgb(43,151,213);
    }
  }
  .query-content {
    padding: 15px 30px;
  }
}
</style>

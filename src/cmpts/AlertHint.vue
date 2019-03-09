<template>
  <el-dialog
    class="dialogClass"
    title="提示"
    :visible.sync="alertHintVis"
    width="25%"
    :before-close="handleClose">
    <div class="msgDiv">
      <span>{{alertValue}}</span>
    </div>
    <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="valueHandler()">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    alertHintVis: false,
    alertValue: ""
  },
  methods: {
      handleClose(done) {
        this.valueHandler()
        // this.$confirm('确认关闭？')
        //   .then(_ => {
        //     done();
        //   })
        //   .catch(_ => {});
      },
      valueHandler () {
        this.alertHintVis = false
        this.$emit('closeAlert')
      }
    }
}
</script>

<style scope>
  .dialogClass {
    z-index: 3000;
  }
  .msgDiv{
    text-align: center;
    color:slategray
  }
</style>


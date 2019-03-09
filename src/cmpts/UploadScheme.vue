<template>
  <!-- 上传方案通用组件 -->
  <div class="uploadScheme">
    <div class="step">
      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
    </div>
    <div class="stepBlock" :style="bodyDX">
      <div class="step1" v-if="active==0">
        <div class="uploadBtns">
          上传方案
        </div>
      </div>
      <div class="step2" v-if="active==1">
        <el-form :inline="true" :model="currentValue" ref="form" label-position="right" :rules="rules" label-width="80px">
          <el-form-item label="标题" prop="title" class="inputRow title">
            <el-input v-model="currentValue.title"></el-input>
          </el-form-item>
          <el-form-item label="水库" prop="reservoirNm" class="inputRow">
            <el-input v-model="currentValue.reservoirNm"></el-input>
          </el-form-item>
          <el-form-item label="简介" prop="info">
            <el-input type="textarea" v-model="currentValue.info"></el-input>
          </el-form-item>
        </el-form>
        <div class="submit">
          <el-button type="warning" size="small" @click="submitIn('form')">确 认 上 传</el-button>
        </div>
      </div>
      <div class="step3" v-if="active==2">
        <div class="successMsg">上传成功</div>
      </div>
    </div>

    <el-button style="margin-top: 12px;" @click="next" :disabled="nextSetp">下一步</el-button>
    <el-button style="margin-top: 12px;" @click="last" :disabled="lastSetp">上一步</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      bodyDX: '',
      currentValue: {
        title: '',
        reservoirNm: '',
        info: ''
      },
      nextSetp: false,
      lastSetp: true,
      rules: {
        title: [{ required: true, validator: this.length50NotNull, trigger: "blur" }],
        reservoirNm: [{ required: true, validator: this.length50, trigger: "blur" }]
      },
    }
  },
  methods: {
    next () {
      this.active++
      if (this.active >= 2) {
        this.nextSetp = true
        return
      }
      this.lastSetp = false
    },
    last () {
      this.active--
      if (this.active <= 0) {
        this.lastSetp = true
        return
      }
        this.nextSetp = false
    }
  },
  created () {
    const windowHeight = document.body.clientHeight;
    this.bodyDX = {
      height: windowHeight * 0.5 + "px"
    }
  }
}
</script>

<style lang="less">
.uploadScheme {
  height: 100%;
  width: 100%;
  .stepBlock {
    border: 1px solid rgba(204, 205, 206, 0.849);
    .step1 {
      height: 80%;
      width: 80%;
      border: 1px dashed rgba(204, 205, 206, 0.849);
      margin: 20px auto;
      .uploadBtns {
        height: 80px;
        width: 250px;
        border-radius: 10px;
        background-color: rgb(255, 153, 0);
        margin: 30px auto;
        text-align: center;
        line-height: 80px;
        color: white;
        font-size: 26px;
      }
    }
    .step2 {
      width: 90%;
      margin: 20px auto;
      position: relative;
      .title {
        border-bottom: 1px solid rgba(204, 205, 206, 0.849);
        margin-bottom: 10px;
      }
      .submit {
        position: absolute;
        right: 0px;
        top: 0px;
      }
    }
    .step3 {
      text-align: center;
      padding: 50px;
      .successMsg {
        font-size: 26px;
        font-weight: bold;
      }
    }
  }
}
</style>

<template>
  <!-- 方案管理共用组件 -->
  <div class="scheme">
    <div class="search">
      <el-input placeholder="请输入内容" v-model="searchKey" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="searchClick">搜索方案</el-button>
      </el-input>
    </div>
    <div class="condition">
      <div class="pageSel">
        页数:
        <my-button-group :buttons="pageButtons" @getValue="getPageParam" />
      </div>
      <div class="timeSel">
        时间:
        <my-button-group :buttons="timeButtons" @getValue="getTimeParam" />
      </div>
      <div class="typeSel" v-if="schemeType=='emergency'">
        类型:
        <my-button-group :buttons="typeButtons" @getValue="getTypeParam" />
      </div>
      <div class="schemeBtn">
        <el-button type="warning" @click="openUpload()">上传方案</el-button>
        <el-button type="success">管理方案</el-button>
      </div>
    </div>
    <div class="content">
      <div class="sort">
        排序：
        <el-radio v-model="radio" label="1">时间</el-radio>
        <el-radio v-model="radio" label="2">相关性</el-radio>
        <span class="count">共58份方案</span>
      </div>
      <div class="contentblock" v-for="(item,index) in schemes" :key="index">
        <div class="title">
          <span class="titleSpan" @click="openFile()">{{item.title}}</span>
          <a :href="fileUrl" download="file">
            <el-button type="primary" size="mini" @click="download()">马上下载</el-button>
          </a>
        </div>
        <div class="info">{{item.time}} | {{item.reservoirNm}} | {{item.pageCount}}</div>
        <div class="detail">{{ item.content }}</div>
      </div>
    </div>
    <el-dialog title="xx方案" :visible.sync="pdfVis" :fullscreen="true">
      <PdfScan :filePath="fileUrl" type="all"></PdfScan>
      <span slot="footer" class="dialog-footer">
        <el-button @click="pdfVis = false">取 消</el-button>
      </span>
    </el-dialog>

    <el-dialog title="上传方案" :visible.sync="uploadVis" :fullscreen="true" class="dialog-custom">
      <div>
        <upload-scheme></upload-scheme>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="uploadVis = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import myButtonGroup from '@cmpts/ButtonGroup'
import PdfScan from '@cmpts/PdfScan'
import UploadScheme from '@cmpts/UploadScheme'

export default {
  props: {
    schemes: Array,
    schemeType: String
  },
  data () {
    return {
      searchKey: '',
      timeButtons: ['一个月', '三个月', '六个月'],
      pageButtons: ['1-10页', '10-20页', '20-30页'],
      typeButtons: ['水库抢险', '人员转移', '防洪抢险指挥机构'],
      params: {
        page: '',
        time: '',
        type: ''
      },
      radio: '',
      pdfVis: false,
      fileUrl: '',
      uploadVis: false,
      
    }
  },
  components: {
    myButtonGroup, PdfScan, UploadScheme
  },
  methods: {
    searchClick () {
      alert('搜索')
    },
    getPageParam (index) {
      this.params.page = this.pageButtons[index]
    },
    getTimeParam (index) {
      this.params.time = this.timeButtons[index]
    },
    getTypeParam (index) {
      this.params.type = this.typeButtons[index]
    },
    download (url) {
      // 下载

    },
    openFile () {
      // 预览文件
      this.pdfVis = true
    },
    openUpload () {
      // 上传窗口
      this.uploadVis = true
    }
  },
  created () {
    this.fileUrl = 'http://192.168.0.109:8090/static/pdf/reservoir.pdf'
    
  }
}
</script>

<style lang="less">
.scheme {
  .search {
    margin-right: 10px;
    .el-input {
      width: 100%;
    }
    .el-input__inner {
      width: 100%;
      height: 40px;
    }
  }
  .condition {
    margin: 5px 0px;
    div {
      padding: 1px 0;
    }
    .schemeBtn {
      position: absolute;
      text-align: center;
      top: 110px;
      right: 80px;
    }
  }
  .content {
    margin-top: 20px;
    .sort {
      .count {
        float: right;
        margin-right: 30px;
      }
    }
    .contentblock {
      margin: 20px 30px;
      height: 100px;
      div {
        margin-bottom: 10px;
      }
      .title {
        position: relative;
        font-size: 20px;
        button {
          position: absolute;
          right: 10px;
        }
        .titleSpan {
          cursor: pointer;
          color: blue;
          border-bottom: 1px solid blue;
        }
      }
      .info {
        color: gray;
        margin-left: 5px;
      }
    }
  }
  .el-radio__input.is-checked .el-radio__inner {
    border-color: #19a97b;
    background: #19a97b;
  }
  .el-radio__input.is-checked + .el-radio__label {
    color: #19a97b;
  }

  .el-dialog__body {
    height: 70%;
    overflow-y: auto;
  }
}
</style>

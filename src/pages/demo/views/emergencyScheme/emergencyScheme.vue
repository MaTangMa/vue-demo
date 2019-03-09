<template>
  <!-- 应急 -->
  <div class="emergencyScheme">
    <scheme :schemes="schemes" schemeType="emergency" class="scheme"></scheme>
    <div class="pageChange">
      <el-pagination @current-change="handleCurrentChange" :current-page.sync="pageNo" :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="totalCount" class="pageClass">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Scheme from '@cmpts/SchemeMng'
import { PAGESIZE } from "@/const/const.js";

export default {
  data () {
    return {
      schemes: [],
      pageNo: 1,
      pageSize: PAGESIZE,
      totalCount: 20
    }
  },
  components: {
    Scheme
  },
  methods: {
    getSchemes () {
      this.schemes = [{
        title: '方案名称2',
        time: '2018-4-2',
        reservoirNm: '水库名',
        pageCount: '25',
        content: '非法Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.。。。'
      }, {
        title: '方案名称2',
        time: '2018-4-2',
        reservoirNm: '水库名',
        pageCount: '25',
        content: '非法Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.。。。'
      }, {
        title: '方案名称2',
        time: '2018-4-2',
        reservoirNm: '水库名',
        pageCount: '25',
        content: '非法Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.。。。'
      }]
    }
  },
  created () {
    this.getSchemes()
  }
}
</script>

<style lang="less">
.emergencyScheme {
  .scheme {
    overflow-y: auto;
    margin-bottom: 20px;
  }
}
</style>

<template>
  <!-- 调度方案管理-自治区 -->
  <div class="dispatchScheme">
    <scheme :schemes="schemes"></scheme>
  </div>
</template>

<script>
import Scheme from '@cmpts/SchemeMng'
export default {
  data () {
    return {
      schemes: []
    }
  },
  components: {
    Scheme
  },
  methods: {
    getSchemes () {
      this.schemes = [{
        title: '方案名称',
        time: '2018-4-2',
        reservoirNm: '水库名',
        pageCount: '25',
        content: '非法Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.。。。'
      }, {
        title: '方案名称',
        time: '2018-4-2',
        reservoirNm: '水库名',
        pageCount: '25',
        content: '非法Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.。。。'
      }, {
        title: '方案名称',
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

<style>

</style>

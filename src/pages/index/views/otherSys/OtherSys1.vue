<template>
  <div class="OtherSys">
    <iframe width="100%" height="100%" scrolling="auto" style="display:block;" noresize frameborder="0" :src="src"> </iframe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      src: 'https://www.sina.com/'
    }
  }
}
</script>

<style lang="less">
.OtherSys{
  position: absolute;
  top: 74px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
</style>

<template>
  <div class="rainwater">
    getters data
    {{ getReservoir[0].name }}
    <br>
    localStorage
    {{ reservoirData }}
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {
      localstoreData: []
    }
  },
  computed: {
    ...mapGetters([
      'getReservoir'
    ]),
    reservoirData: function() {
      return this.$vlstore.get('reservoirData')
    }
  },
  methods: {

  },
  created() {
  }
}
</script>

<style>
.rainwater{
  width: 100%
}
</style>

<template>
  <div>
    <router-view />
    <!-- <h1>VUE组件合集</h1>
      <router-link to="/VueDraggable">绘制框</router-link>|
      <router-link to="/FloatBall">悬浮球</router-link>|
    <router-link to="/WaterMarker">水印</router-link>-->
  </div>
</template>

<script>

export default {
  name: 'Main',
  components: {},
  props: {},
  data () {
    return {
      routeList: []
    }
  },
  beforeCreate () {
    // console.log(this.$router.options.routes)
  },
  mounted () {

  },
  watch: {

  },
  methods: {

  }
}
</script>
<style lang='less' scoped>
</style>

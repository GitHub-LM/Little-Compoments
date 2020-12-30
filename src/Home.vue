<template>
  <div class="home">
    <div id="route-dom">
      <span>二级路由：</span>
      <router-link
        :to="item.path"
        v-for="(item,index) in routeList"
        :key="index"
      >{{item.meta.title}}</router-link>
    </div>

    <router-view />
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
  mounted () {
    let arr = this.$router.options.routes
    console.log(arr)
    this.routeList = arr[1].children
  }
}
</script>
<style lang='less' scoped>
.home {
  position: absolute;
  top: 200px;
  width: 100%;
  height: 100px;
  background: #f6f6f6;
}
</style>

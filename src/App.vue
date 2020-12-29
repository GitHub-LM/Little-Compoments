<template>
  <div id="app">
    <div id="route-dom">
      <router-link :to="item.path" v-for="(item,index) in routeList" :key="index">{{item.name}}</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      routeList: []
    }
  },
  mounted () {
    this.routeList = this.$router.options.routes || []
    // 监听锚点变化 hash模式原理
    window.addEventListener('hashchange', function (e) {
      console.log('hashchange', e)
    })
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#route-dom {
  padding: 30px;
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

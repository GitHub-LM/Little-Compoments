<template>
  <div id="app">
    <div id="route-dom">
      <span>一级路由：</span>
      <router-link :to="item.path" v-for="(item,index) in routeList" :key="index">{{item.name}}</router-link>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
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
    this.routeList = this.$router.options.routes.filter((e) => {
      return e.path !== '/'
    })
    // 监听锚点变化 hash模式原理
    window.addEventListener('hashchange', (e) => {
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
    margin: 0 20px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

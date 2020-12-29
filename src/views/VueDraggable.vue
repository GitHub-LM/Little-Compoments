<template>
  <div class="VueDraggable">
    <div class="text-event">
      <vue-draggable-resizable
        :w="150"
        :h="150"
        :x="50"
        :y="50"
        :min-width="50"
        :min-height="50"
        :parent="true"
        :grid="[10, 10]"
        class-name="dragging1"
        @dragging="onDrag"
        @resizing="onResize"
      >
        <p>
          你好！ 我是一个灵活的组件。 你可以拖我四处，你可以调整我的大小。
          <br />
          X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}
        </p>
      </vue-draggable-resizable>
    </div>
  </div>
</template>

<script>
import VueDraggableResizable from "vue-draggable-resizable";
import "vue-draggable-resizable/dist/VueDraggableResizable.css";

export default {
  name: "VueDraggable",
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  components: { VueDraggableResizable },
  mounted () {
    const arr = [1, [2, [3, [4, 5]]], 6]
    const arr1 = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}]
    console.log(arr.flat(Infinity), JSON.stringify(arr).replace(/\[|\]/g, '').split(','))
    console.log(new Set(arr1))
    // 测试promise
    this.myStep()
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    },
    onDrag: function (x, y) {
      this.x = x;
      this.y = y;
    },
    // 测试promise
    red () {
      console.log('red')
    },
    green () {
      console.log('green')
    },
    yellow () {
      console.log('yellow')
    },
    myLight (timer, cb) {
      return new Promise((resolve) => {
        const timerA = setTimeout(() => {
          cb
          resolve()
        }, timer)
        // 清除计时器
        this.$once('hook:beforeDestroy', ()=>{
          clearTimeout(timerA)
        })
      })
    },
    myStep () {
      Promise.resolve().then(() => {
        return this.myLight(3000, this.red());
      }).then(() => {
        return this.myLight(2000, this.green());
      }).then(() => {
        return this.myLight(1000, this.yellow());
      }).then(() => {
        this.myStep()
      })
    }
  }
};
</script>

<style lang="less" scoped>
.VueDraggable {
  width: 100%;
  height: 100%;
  position: relative;
  margin: auto;
  top: 200px;
}
.text-event {
  height: 500px;
  width: 500px;
  margin: auto;
  border: 1px solid red;
  background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 10px 10px,
    linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 10px 10px;
}

.dragging1 {
  border: 1px solid #000;
  color: #000;
}
</style>

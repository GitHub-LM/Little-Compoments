<template>
  <div>
    <!-- <ul>
      <li>arr.reduce(callback,[initialValue])</li>
    </ul>-->
  </div>
</template>

<script>

export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {

    }
  },
  mounted () {
    // reduce 累加
    const arr = [1, 34, 56, 7]
    let sum = arr.reduce((prev, cur, ind, arr) => {
      console.log(prev, cur, ind, arr)
      return prev + cur
    })
    console.log(arr, sum)
    // 求和，求积
    var arr2 = [1, 2, 3, 4];
    var sum2 = arr2.reduce((x, y) => x + y)
    var mul = arr2.reduce((x, y) => x * y)
    console.log(sum2); //求和，10
    console.log(mul); //求乘积，24

    // 数组去重
    let arr3 = [1, 2, 3, 3, 34, 5, 5, 5, 3, 3, 1, 44]
    let newArr = arr3.reduce((prev, cur) => {
      if (!prev.includes(cur)) return prev.concat(cur)
      else return prev
    }, [])
    console.log(newArr)
  },
  watch: {

  },
  methods: {

  }
}
</script>
<style lang='less' scoped>
</style>

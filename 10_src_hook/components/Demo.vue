<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++"> 总数+1</button>
  <br>
  <h2>当前点击鼠标的坐标为：x: {{ point.x }} y:{{ point.y }}</h2>
  <br><br>
<!--  <button @click="getPoint">获取Point参数</button>-->
</template>

<script>

import {ref} from "vue"
import usePoint from "@/hooks/usePoint"

export default {
  name: "Demo",
  setup() {
    let sum = ref(0)

    let point = usePoint()



    return {
      sum,
      point
    }
  },

}
</script>

<style scoped>

</style>

<template>
  <div class="son">
    <h3>我是Son组件 (T3)，T1 的座驾是：{{name}}</h3>
  </div>
</template>

<script>
import {inject, toRefs} from "vue";

export default {
  name: "Son",
  setup(){
    let car = inject('car')
    return {
      ...toRefs(car)
    }
  }
}
</script>

<style scoped>
.son{
  background-color: orange;
  padding: 10px;
}
</style>

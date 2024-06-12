<template>
  <div class="app">
    <h3>我是App组件 (T1) , 座驾：{{name}}， 价格：{{price}}</h3>
    <Child/>
  </div>
</template>
<script>
import Child from "@/components/Child";
import {provide, reactive, toRefs} from "vue";
export default {
  name: 'App',
  components: {Child},
  setup() {
    let car = reactive({name:'大奔',price:'40W'})

    // 给子组件的任何一个层级获取到
    provide('car',car)
    return{
      ...toRefs(car)
    }
  }
}
</script>

<style>
.app{
  background-color: gray;
  padding: 10px;
}
</style>

<template>
  <div class="app">
    <h3>我是 APP 组件</h3>
  </div>
</template>
<script>
import {isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref} from "vue";

export default {
  name: 'App',
  setup() {
    let car = reactive({name: '大奔',price: '40w'})
    let sum = ref(0)
    let car2 = readonly(car)


    console.log('isRef',isRef(sum))
    console.log('isReactive',isReactive(car))
    console.log('isReadonly',isReadonly(car2))
    console.log('isProxy car2',isProxy(car2))
    console.log('isProxy sum',isProxy(sum))
    console.log('isProxy car',isProxy(car))

  }
}
</script>

<style>
.app{
  background-color: gray;
  padding: 10px;
}
</style>

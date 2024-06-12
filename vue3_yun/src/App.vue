<template>
  <div class="app">
    <h3>我是App组件 (T1)</h3>
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback>
        <h3>稍等,加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>
<script>
// import Child from "@/components/Child";
import {defineAsyncComponent} from "vue";

// 动态引入、异步引入
const Child = defineAsyncComponent(()=> import('@/components/Child'))

export default {
  name: 'App',
  components: {Child}
}
</script>

<style>
.app{
  background-color: gray;
  padding: 10px;
}
</style>

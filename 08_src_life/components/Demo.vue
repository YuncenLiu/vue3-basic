<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++"> 总数+1</button>

</template>

<script>
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";

export default {
  name: "Demo",
  setup() {
    let sum = ref(0)

    // 通过组合式API使用生命周期钩子
    // beforeCreate 、 created 不支持组合式 API， setUp 就相当于这两个了。

    // 组合式 要比 配置项快一点
    // 真正开发的时候，不会同时使用 组合式 和 配置项

    onBeforeMount(()=>{
      console.log('onBeforeMount')
    })

    onMounted(()=>{
      console.log('onMounted')
    })

    onBeforeUpdate(()=>{
      console.log('onBeforeUpdate')
    })

    onUpdated(()=>{
      console.log('onUpdated')
    })

    onBeforeUnmount(()=>{
      console.log('onBeforeUnmount')
    })

    onUnmounted(()=>{
      console.log('onUnmounted')
    })


    return {
      sum,
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  }
}
</script>

<style scoped>

</style>

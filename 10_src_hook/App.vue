<template>
  <br><br>
  <button @click="isShowDemo = !isShowDemo">挂载 / 卸载</button>
  <Demo v-if="isShowDemo"/>
</template>

<script>
import Demo from "@/components/Demo";
import {ref} from "vue";
export default {
  name: 'App',
  components: {Demo},
  setup(){
    let isShowDemo = ref(true)

    return{
      isShowDemo
    }
  }
}
</script>

<style>
</style>

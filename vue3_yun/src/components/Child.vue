<template>
  <div class="child">
    <h3>我是Child组件 (T2)</h3>
    <h3>{{sum}}</h3>
  </div>
</template>

<script>

import {ref} from "vue";

export default {
  name: "Child",
  setup(){
    let sum = ref(0)
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({sum})
      },3000)
    })
  }
}
</script>

<style scoped>
  .child{
    background-color: skyblue;
    padding: 10px;
  }
</style>

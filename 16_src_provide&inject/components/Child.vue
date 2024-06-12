<template>
  <div class="child">
    <h3>我是Child组件 (T2)，T1 座驾价格是: {{price}}</h3>
    <button @click="updateCarName">我想修改T1 的座驾</button>
    <Son/>
  </div>
</template>

<script>
import Son from "@/components/Son";
import {inject, toRefs} from "vue";
export default {
  name: "Child",
  components: {Son},
  setup(){
    let car = inject('car')

    function updateCarName(){
      console.log(car)
      car.name = '奔驰'
    }

    return {
      updateCarName,
      ...toRefs(car)
    }
  }
}
</script>

<style scoped>
  .child{
    background-color: skyblue;
    padding: 10px;
  }
</style>

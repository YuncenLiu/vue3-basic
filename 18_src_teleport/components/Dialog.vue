<template>
  <div>
    <button @click="isShow=true">点我弹个窗</button>
    <teleport to="body">
      <div  v-show="isShow" class="mask">
        <div class="dialog">
          <h3>我是一个弹窗</h3>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <button @click="isShow=false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "Dialog",
  setup() {
    let isShow = ref(false)
    return {isShow}
  }
}
</script>

<style scoped>
.dialog {
  width: 300px;
  height: 300px;
  background-color: aqua;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.mask{
  position: absolute;
  top:0; bottom:0;left: 0;right: 0;
  background-color: rgba(0,0,0,0.5);
}
</style>
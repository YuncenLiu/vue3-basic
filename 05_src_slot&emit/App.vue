<template>
  <h4>一个人的信息</h4>
  <Demo @hello="showHelloMsg" msg="你好" school="北京大学">
    <template v-slot:msg1>
      <span>你好1</span>
    </template>
    <template v-slot:msg2>
      <span>你好2</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "@/components/Demo";
export default {
  name: 'App',
  components: {Demo},
  setup(){
    function showHelloMsg(value){
      alert(`你好，触发了hello事件，收到参数 ${value}`)
    }

    return{
      showHelloMsg
    }
  }
}
</script>

<style>
</style>

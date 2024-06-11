<template>
  <div class="demo">
    <h2>我是 Demo 组件</h2>
  </div>
</template>

<script>
export default {
  name: "Demo",
  props: ['msg','school'],
  mounted() {
    console.log(this)
  }
}
</script>

<style scoped>
  .demo{
    background-color: orange;
    padding: 10px;
  }
</style>
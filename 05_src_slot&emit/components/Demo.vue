<template>
  <h4>姓名：{{ person.name }}</h4>
  <h4>年龄：{{ person.age }}</h4>
  <button @click="faTest">父组件</button>
  <hr>
  <slot name="msg2"></slot>
  <hr>
  <slot name="msg1"></slot>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "Demo",
  props: ['msg','school'],
  emits: ['hello'],
  beforeCreate() {
    // console.log('beforeCreate')
  },
  setup(props, context) {
    // console.log('setUp init', props)
    // console.log('setUp init', context)
    console.log('setUp init', context.slots)


    let person = reactive({
      name: '张三',
      age: 18,
    })

    // 子给父传递
    function faTest(){
      context.emit('hello', 666)
    }
    return {
      person,
      faTest
    }
  },
  mounted() {
    // console.log('mounted',this)
  }
}
</script>

<style scoped>

</style>
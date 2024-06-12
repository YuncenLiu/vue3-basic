<template>

  <h4>正常Ref当前的值是：{{x.y}}</h4>
  <h4>shallowRef当前的值是：{{z.y}}</h4>
  <button @click="x.y++">ref x+1</button>
  <button @click="z.y++">shallowRef x+1</button>
  <hr>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.salary }}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <br><br>
  <button @click="age ++">增长年龄</button>
  <br><br>
  <button @click="job.salary ++ ">涨薪</button>
  <h2>{{ person }}</h2>

</template>

<script>

import {reactive, ref, shallowReactive, shallowRef, toRefs} from "vue"

export default {
  name: "Demo",
  setup() {

    // shallowReactive 只考虑对象的第一层
/*    let person = shallowReactive({
      name: '张三',
      age: 18,
      job: {
        salary: 20
      },
    })*/

    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        salary: 20
      },
    })


    let x = ref({
      y: 0
    })
    // shallowRef 不处理对象类型的响应式，只处理基础类型的响应式
    let z = shallowRef({
      y:0
    })

    // 但是通过和普通 ref 结合使用发现，先对 shallowRef进行操作，无反应后，再对普通 ref 进行操作，此时 shallowRef 会将之前未生效的操作一次性全部生效。

    console.log(x,z)

    return {
      person,
      x,
      z,
      ...toRefs(person)
    }

  },

}
</script>

<style scoped>

</style>

<template>

  <h4>当前的值是：{{sum}}</h4>
  <button @click="sum++">sum+1</button>
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

import {reactive, readonly, ref, shallowReadonly, toRefs} from "vue"

export default {
  name: "Demo",
  setup() {
    let sum = ref(0)
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        salary: 20
      },
    })

    // 对 person 覆盖后，不允许被修改
    // person = readonly(person)

    // 第一层数据不允许被修改，但深层的数据可以被修改
    person = shallowReadonly(person)

    return {
      person,
      sum,
      ...toRefs(person)
    }

  },

}
</script>

<style scoped>

</style>

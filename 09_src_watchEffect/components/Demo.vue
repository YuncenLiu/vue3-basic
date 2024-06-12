<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++"> 总数+1</button>
  <hr>
  <h2>当前的信息为:{{ msg }}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <br>
  <button @click="person.age++">增加年龄</button>
  <h2>薪资：{{ person.job.salary }}K</h2>
  <button @click="person.job.salary ++">增加薪资</button>
</template>

<script>
import {reactive, ref, watchEffect} from "vue";

export default {
  name: "Demo",
  setup() {
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        salary: 20
      }
    })

    watchEffect(()=>{
      const x1 = sum.value
      const x2 = person.job.salary

      console.log(x1,x2)
    })

    return {
      sum,
      msg,
      person
    }
  }
}
</script>

<style scoped>

</style>

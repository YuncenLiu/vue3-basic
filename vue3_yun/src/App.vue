<template>
  <h4>一个人的信息</h4>
  <h4>姓名：{{name}}</h4>
  <h4>年龄：{{age}}</h4>
  <h4>工作种类：{{job.type}}</h4>
  <h4>工作薪水：{{job.salary}}</h4>

  <button @click="changeInfo">修改个人信息</button>


</template>

<script>
import {ref} from  'vue'
export default {
  name: 'App',
  setup() {
    // 数据
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type: 'IT',
      salary: '30K'
    })

    function changeInfo(){
      name.value = '李四'
      age.value = 48
      job.value.type = 'CTO'
      job.value.salary = '100K'
    }

    // 返回对象
    return {
      name,
      age,
      job,
      changeInfo
    }

  }
}
</script>

<style>
</style>

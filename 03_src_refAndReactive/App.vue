<template>
  <h4>一个人的信息</h4>
  <h4 v-show="person.name">姓名：{{ person.name }}</h4>
  <h4>年龄：{{ person.age }}</h4>
  <h4 v-show="person.sex">性别：{{ person.sex }}</h4>
  ref 对象
  <h4>工作种类：{{ person.job.type }}</h4>
  <h4>工作薪水：{{ person.job.salary }}</h4>
  reactive 对象
  <h4>学历水平：{{ person.study.level }}</h4>
  <h4>毕业学校：{{ person.study.school }}</h4>
  <h4>爱好:{{ person.hobby }}</h4>

  <ul>
    <li v-for="h in person.hobby" :key="keys">{{ h }}</li>
  </ul>
  <br><br>
  <button @click="changeInfo">修改个人信息</button>
  <br><br>
  <button @click="addSex">添加一个sex属性</button>
  <br><br>
  <button @click="delName">删除一个name属性</button>


</template>

<script>
import {ref, reactive} from 'vue'

export default {
  name: 'App',
  setup() {

    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: 'IT',
        salary: '30K'
      },
      study: {
        level: '高中',
        school: '衡水一中'
      },
      hobby: ['抽烟', '喝酒', '烫头']
    })


    function changeInfo() {
      person.name = '李四'
      person.age = 48
      person.job.type = 'CTO'
      person.job.salary = '100K'

      person.study.level = '博士'
      person.study.school = '清华大学'

      person.hobby[0] = '学习'
    }

    function addSex() {
      person.sex = '男'
    }

    function delName() {
      delete person.name
    }

    // 返回对象
    return {
      person,
      changeInfo,
      addSex,
      delName
    }

  }
}
</script>

<style>
</style>

<template>
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

import {reactive, toRef, toRefs} from "vue"

export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        salary: 20
      },
    })

    // 这样发现参数无法修改
    /*
        return {
          name: person.name,
          age: person.age,
          salary: person.job.salary
        }
    */

    // toRef 找到这个对象本身
    /*    return {
          name: toRef(person.name),
          age: toRef(person.age),
          salary: toRef(person.job.salary)
        }*/

    // toRef 第二种写法
    return {
      person,
      // 只能拆第一层
      ...toRefs(person)

      // name: toRef(person, 'name'),
      // age: toRef(person, 'age'),
      // salary: toRef(person.job, 'salary')
    }

    // 还有一种写法，直接写成 ref(person.name) 这种操作容易导致后续修改这个数据无法修改到真实数据（破坏了引用关系）[不建议]
  },

}
</script>

<style scoped>

</style>

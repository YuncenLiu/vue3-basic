<template>

  <h4>当前的值是：{{sum}}</h4>
  <button @click="sum++">sum+1</button>
  <hr>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.salary }}K</h2>
  <h2 v-show="person.car">汽车：{{ person.car }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <br><br>
  <button @click="age ++">增长年龄</button>
  <br><br>
  <button @click="job.salary ++ ">涨薪</button>
  <h2>{{ person }}</h2>

  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加车</button>
  <button @click="changePrice">车涨价</button>
</template>

<script>

import {markRaw, reactive, ref, toRaw, toRefs} from "vue"

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


    // toRaw 只能处理 reactive 对象
    function showRawPerson(){
      const p = toRaw(person)
      console.log(p)
    }

    function addCar(){
      let car = {name:'奔驰',price: '40'}

      // person.car = car
      // 经过markRaw 修饰，这个数据就不再支持响应式，但是数据真实被修改了，只是没有响应式
      person.car = markRaw(car)
    }

    // 通过 markRaw 的修饰，取消了 car 的响应式，但数据还是被改动了
    function changePrice(){
      person.car.price++
      console.log(person.car.price)
    }

    return {
      person,
      sum,
      showRawPerson,
      addCar,
      changePrice,
      ...toRefs(person)
    }

  },

}
</script>

<style scoped>

</style>

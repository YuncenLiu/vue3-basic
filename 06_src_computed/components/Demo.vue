<template>
  姓：<input type="text" v-model="person.firstName">
  名：<input type="text" v-model="person.lastName">
  <br><br>
  <span>全名：{{person.fullName}}</span>
  <br><br>
  全名：<input type="text" v-model="person.fullName">
</template>

<script>
import {reactive, computed} from "vue";

export default {
  name: "Demo",
  // 不建议写 vue2 写法
  // computed: {
  //   fullName(){
  //     return this.person.firstName + '-' + this.person.lastName
  //   }
  // },
  setup(props, context) {
    let person = reactive({
      firstName: '张',
      lastName: '三',
    })

    // 计算属性 简写形式不能被修改
/*    person.fullName = computed(() =>{
      return person.firstName + '-' + person.lastName
    })*/


    person.fullName = computed({
      get(){
        return person.firstName + '-' + person.lastName
      },
      set(value){
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })

    return {
      person,
    }
  }
}
</script>

<style scoped>

</style>
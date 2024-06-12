<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>
<script>

import {customRef, ref} from "vue";

export default {
  name: 'App',
  setup(){

    // 自定义 ref 函数
    function myRef(value,delay){
      return customRef((track, trigger)=>{
        let timer
        return {
          get(){
            console.log(`custom 读取 ${value} `)
            track() // 通知 Vue 追踪 value 的变化
            return value
          },
          set(newValue){
            console.log(`custom 修改 ${value} , 新的值为 ${newValue}`)
            value = newValue
            clearTimeout(timer)
            timer = setTimeout(()=>{
              trigger() // 通知 Vue 去重新解析模版
            },delay)
          }
        }
      })
    }

    // let keyWord = ref('hello')
    let keyWord = myRef('hello',500)
    return {keyWord}
  }
}
</script>

<style>
</style>

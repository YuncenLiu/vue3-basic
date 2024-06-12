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
import {reactive, ref, watch} from "vue";

export default {
  name: "Demo",

  // Vue2 中的监视
  /*watch:{
    /!*sum(newValue,oldValue){
      console.log(`总数被修改，新的值为:${newValue} 旧的值为：${oldValue}`)
    }*!/
    sum:{
      // 第一次初始化的时候，执行一次 handler
      immediate: true,
      // 深度监视
      deep: true,
      handler(newValue,oldValue){
        console.log(`总数被修改，新的值为:${newValue} 旧的值为：${oldValue}`)
      }
    }
  },*/
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

    // 情况一：监视 ref 所定义的一个响应式数据
    /*
            watch(sum,(newValue,oldValue)=>{
              console.log(`总数被修改，新的值为:${newValue} 旧的值为：${oldValue}`)
            },{immediate: true})
    */

    // 情况二：监视 ref 定义的多个响应式数据
    /*    watch([sum, msg], (newValue, oldValue) => {
          console.log(`数据被修改，新的值为:${newValue} 旧的值为：${oldValue}`)
        }, {immediate: true})*/


    // 情况三，监视 reactive 定义的响应式对象，注意，此处无法正确的获取 oldValue
    // 无法正常获取 oldValue
    // 强制开启了深度监视（deep配置无效）
    // 通过 () => person.age 监视对象内部数据，此时可以获取到 oldValue
/*    watch(() => person.age, (newValue, oldValue) => {
      console.log('数据被修改了', newValue, oldValue)
    })*/
    // 对象模式监控多个响应值
    watch([()=>person.name,()=>person.age], (newValue, oldValue) => {
      console.log('数据被修改了', newValue, oldValue)
    })

    watch(()=>person.job, (newValue, oldValue) => {
      console.log('数据被修改了', newValue, oldValue)
    },{deep:true})


    // 如果对象是 ref属性，用下面这两种方式, 因为 ref 引用的数据类型如果是一个对象，则会再借助 reactive 包装一次，通过 .value 的方式，可以真正定位到 reactive，此时和上面保持一致了。
    /*    watch(person.value,(newValue, oldValue)=>{
          console.log('数据被修改了', newValue, oldValue)
        })*/

    // 通过使用 deep 深度监测，可以不用 .value 解决
    /*
        watch(person,(newValue,oldValue)=>{
          console.log('数据被修改了', newValue, oldValue)
        },{deep:true})
    */


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

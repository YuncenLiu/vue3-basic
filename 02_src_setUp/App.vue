<template>
  <h4>一个人的信息</h4>
  <h4>姓名：{{name}}</h4>
  <h4>年龄：{{age}}</h4>
  <button @click="sayHello">vue3 信息</button>
  <br><br>
  <button @click="getVue2Data">vue3获取vue2数据</button>
  <br>
  <h3>Vue2 版本内容</h3>
  <h4>年龄：{{age}}</h4>
  <button @click="sayWelcome">vue2 欢迎</button>
  <br><br>
  <button @click="getVue3Data">vue2获取vue3数据</button>
</template>

<script>
import {h} from 'vue'
export default {
  name: 'App',
  data(){
    return{
      sex: '男'
    }
  },
  methods:{
    sayWelcome(){
      alert('Vue2 版本方法')
    },
    getVue3Data(){
      console.log(this.name)
      console.log(this.age)
      console.log(this.sayHello)
      this.sayHello()
    }
  },

  // 此处只是测试 setUp，不考虑响应式
  setup() {
    // 数据
    let name = '张三'
    let age = 18

    // 方法
    function sayHello(){
      alert(`我叫 ${name} ，我 ${age} 岁，你好啊！`)
    }


    // 通过 vue3中的 setUp 读取不到 vue2 数据
    // 建议 vue2、vue3 配置不要混用
    // 如果重名 setUp 优先
    function getVue2Data(){
      console.log(name)
      console.log(this.sex)
      console.log(this.sayWelcome)

    }

    // 返回对象
    return {
      name,
      age,
      sayHello,
      getVue2Data
    }

    // 返回渲染函数
    // return () => h('h1','Hello World')
  }
}
</script>

<style>
</style>

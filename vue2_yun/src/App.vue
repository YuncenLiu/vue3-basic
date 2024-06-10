<template>
  <div id="app">
    <h1>Vue2效果</h1>
    <h2 v-show="person.name">姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2 v-show="person.sex">性别：{{person.sex}}</h2>
    <h2>爱好：{{person.hobby}}</h2>
    <br><br>
    <button @click="addSex">增加性别</button>
    <br><br>
    <button @click="deleteName">删除姓名</button>
    <br><br>
    <button @click="updateHobby">修改第一个爱好</button>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'App',
  data(){
    return{
      person:{
        name: '张三',
        age: 18,
        hobby: ['学习','吃饭']
      }
    }
  },
  methods:{
    addSex(){
      // this.person.sex = '女'

      // 解决方案一
      // this.$set(this.person,'sex','女')
      // 解决方案二
      Vue.set(this.person,'sex','女')
    },
    deleteName(){
      // this.$delete(this.person,'name')

      Vue.delete(this.person, 'name')
    },
    updateHobby(){
      // 这样无效，因为数组只能使用固定的6个方法才能修改
      // this.person.hobby[0] = '游戏'

      // this.$set(this.person.hobby,0 ,'游戏')

      this.person.hobby.splice(0, 1, '游戏')
    }
  }
}
</script>

<style>
</style>

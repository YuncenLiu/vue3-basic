// 不再引入 vue 构造函数，而是 createApp 工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// Vue2 写法，不再兼容原先版本
// new Vue({
//     render: h => h(App),
// }).$mount('#app')



// 创建应用实例对象 - app(类似于之前 Vue2 中的 vm，但 app 比 vm 更轻)
// const app = createApp(App)

// 挂载
// app.mount('#app')

createApp(App).mount('#app')

// 3秒后 取消挂在，页面变白
// setTimeout(()=>{
//     app.unmount('#app')
// },3000)

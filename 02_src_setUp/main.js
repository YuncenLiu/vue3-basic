// 不再引入 vue 构造函数，而是 createApp 工厂函数
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

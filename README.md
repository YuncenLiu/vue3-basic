# vue3-basic
 

## 创建Vue3工程

### 使用webpack创建

```shell
# 查看@vue/cli 版本，确保版本在 4.5.0 以上
vue --version

# 安装或者升级 @vue/cli 
npm install -g @vue/cli

# 创建
vue create vue3_yun

# 启动
cd vue_test
npm run serve
```


### 使用Vite创建

>  官方文档: [https://cn.vuejs.org/guide/quick-start.html#vite](https://cn.vuejs.org/guide/quick-start.html#vite)
> 
>  vite官网: [https://vitejs.cn/](https://vitejs.cn/)

```shell
# 创建工程
npm init vite-app vue3_yun_vite

# 启动
cd vue3_yun_vite
npm install
npm run dev
```

## 常用CompositionAPI

### setUp

1. setUp 是所有 `CompositionAPI` （组合API） 表演舞台，是 Vue3 中的新的配置项
2. 组件中所有用到的 数据、方法等都要放在 setUp 中
3. 返回值
   1. 若返回一个对象，则对象中的属性、方法，在模板中均可以直接使用
   2. 若返回渲染函数，则可以自定义渲染内容
4. 尽量不要 `vue2` 配置混用
   1. Vue2.x 配置的 （data、methods、computed...） 可以访问到 setUp 中属性，但是 setUp 不能访问 Vue2 配置
   2. 如果有重名，setUp 优先
7. setUp 不能是一个 async 函数，因为返回值不再是 return 对象，而是 promise 模板看不到 return 对象的属性

### ref函数

1. 定义一个响应式的数据
2. 语法 `const xxx = ref(initValue)`
   1. 创建一个包含响应式数据的 引用对象(reference对象，简称 ref 对象)
   2. Js 中操作数据 `xxx.value`
   3. 模板中读取数据，不需要 `.value`
3. 接收的数据可以是基本类型、也可以是对象类型
4. 基本类型的数据，响应式依旧靠 `Object.defineProperty()` 的 `get` 和 `set` 实现的
5. 对象类型的数据，内部使用了 Vue3 中的 `reactive` 函数

```js
 let job = ref({
   type: 'IT',
   salary: '30K'
 })

 function changeInfo(){
   name.value = '李四'
   age.value = 48
   job.value.type = 'CTO'
   job.value.salary = '100K'
 }
```
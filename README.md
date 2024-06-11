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

### reactive函数

定义一个 对象类型 的响应式数据（基本类型不要用它，要用 ref 函数）

语法：

```js
const 代理对象 = reactive(源对象)
```

接收一个对象、数组返回一个代理对象（proxy 对象）

reactive 定义的响应式数据是 深层次的

内部居于 ES6 的 proxy 实现，通过代理对象操作元对象内部数据进行操作

### Vue3中的响应式原理

#### Vue2的响应式

原理通过 Object.defineProperty() 对属性的读取、修改进行拦截（数据劫持）
```js
Object.defineProperties(data,'count',{
    get(){},
    set(){}
})
```
需要借助 $set 、  Vue.set 等方法才可以进行修改

存在的问题
1. 新增属性、删除属性，界面不会更新
2. 直接通过下标修改数组，界面不会自动更新

#### Vue3响应式

实现原理
1. 通过 Proxy 代理，拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等
2. 通过 Reflect 反射，对源对象的属性进行操作
3. MDN文档中描述的 [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 和 [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
   

```js
    // Vue3 实现响应式
   const p = new Proxy(person,{
       get(target,propName){
           console.log(`${propName} 被读取`)
           return target[propName]
       },
       set(target, propName, value){
           console.log(`${propName} 属性被更新，新的内容为 ${value}`)
           target[propName] = value
       },
       deleteProperty(target, p) {
           console.log(`${p} 被删除了`)
           return delete target[p]
       }
   })


let obj = {a:1,b:2}
// Reflect.get(obj,'a') // 获取
// Reflect.set(obj,'a',6) // 修改
// Reflect.deleteProperty(obj,'a') // 删除

// 通过 Reflect 操作
    const x1 = Reflect.defineProperty(obj, 'c' ,{
        get(){
            return 3
        }
    })
    const x2 = Reflect.defineProperty(obj, 'c', {
        get(){
            return 4
        }
    })
```

### reactive对比ref

1. 从定义数据角度对比
   + ref 用来定义：`基本类型数据`
   + reactive 用来定义：`对象、数组类型`
   + ref 也可以用来定义`对象、数组`，它内部会自动通过 reactive 转化为 `代理对象`
2. 从原理角度对比
   + ref 通过 `Object.defineProperty()` 的 get 与 set 来响应式
   + reactive 通过使用 `Proxy` 来实现响应式(数据劫持) ,并通过 Reflect 操作源对象内部数据
3. 从使用角度对比
   + ref 定义的数据，操作数据需要 `.value`， 读取数据时模板中直接读取不需要 `.value`
   + reactive 定义数据，操作数据与读取数据：均不需要 `.value`

### watch函数

Vue2.x 中的 watch 功能保持一致
1. 监视 reactive 时，oldValue 无法获取，强制开启了深度监视 （deep配置失效）
2. 监视 reactive 中的某个属性仍然是对象时，deep 配置有效

```js
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
watch(sum, (newValue, oldValue) => {
   console.log(`总数被修改，新的值为:${newValue} 旧的值为：${oldValue}`)
}, {immediate: true})

// 情况二：监视 ref 定义的多个响应式数据
watch([sum, msg], (newValue, oldValue) => {
   console.log(`数据被修改，新的值为:${newValue} 旧的值为：${oldValue}`)
}, {immediate: true})


// 情况三，监视 reactive 定义的响应式对象，注意，此处无法正确的获取 oldValue
// 无法正常获取 oldValue
// 强制开启了深度监视（deep配置无效）
// 通过 () => person.age 监视对象内部数据，此时可以获取到 oldValue
watch(() => person.age, (newValue, oldValue) => {
   console.log('数据被修改了', newValue, oldValue)
})
// 对象模式监控多个响应值
watch([() => person.name, () => person.age], (newValue, oldValue) => {
   console.log('数据被修改了', newValue, oldValue)
})

// reactive 中的对象仍然是对象，deep 有效
watch(() => person.job, (newValue, oldValue) => {
   console.log('数据被修改了', newValue, oldValue)
}, {deep: true})
```
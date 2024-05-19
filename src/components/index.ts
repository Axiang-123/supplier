import type { Component } from 'vue' //import type 是用来协助进行类型检查和声明的，在运行时是完全不存在的。
import BreadCrumb from './Breadcrumb/BreadCrumb.vue'
import ErpFile from './uploadFlie/ErpFile.vue'
// ✨如果使用的是 JS 可以删除类型校验
const components: {
  [propName: string]: Component //字面量类型，每个属性值类型为组件的类型
} = {
    BreadCrumb,
    ErpFile
}
export default components
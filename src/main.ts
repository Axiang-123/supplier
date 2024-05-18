import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ErpFile from "./components/uploadFlie/ErpFile.vue";
import Breadcrumb from "./components/Breadcrumb/BreadCrumb.vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('erp-file', ErpFile)
app.component('Bread-crumb', Breadcrumb)
app.use(ElementPlus)
app.use(router).mount('#app')

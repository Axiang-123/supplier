import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import globalComponent from '@/components/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
for (const componentItme in globalComponent) {
  app.component(componentItme, globalComponent[componentItme])
}
app.use(ElementPlus)
app.use(router).mount('#app')

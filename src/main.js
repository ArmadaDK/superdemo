import { createApp } from 'vue'
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import flv from 'flv.js'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(flv)
app.mount('#app')

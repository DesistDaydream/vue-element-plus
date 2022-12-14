import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import "./assets/main.css"

// 全局引入 Element Plus
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

const app = createApp(App)

app.use(router).use(ElementPlus)

app.mount("#app")

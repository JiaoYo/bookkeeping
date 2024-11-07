import { createSSRApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import 'virtual:uno.css'
// main.js
export function createApp () {
  const app = createSSRApp(App)
  // 注册全局组件
  setupStore(app)
  return {
    app
  }
}

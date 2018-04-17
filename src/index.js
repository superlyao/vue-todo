import Vue from 'vue'
import App from './app.vue'

import './assets/style/test-styl.styl'
import './assets/style/test.css'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => (App)
}).$mount(root)
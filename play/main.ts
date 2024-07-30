import {createApp} from 'vue'
import App from './App.vue'
// import * as Com from '@fs-design/components/index.ts'
import * as Com from '../packages/components/index'

const app = createApp(App)
app.component('fs-button', Com.Button)
app.mount('#app')

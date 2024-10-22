import { createApp } from 'vue';
import App from './App.vue';
import * as Com from '@fs-design/components/index';

const app = createApp(App);
app.component('fs-button', Com.Button);
app.component('fs-icon', Com.Icon);

app.mount('#app');

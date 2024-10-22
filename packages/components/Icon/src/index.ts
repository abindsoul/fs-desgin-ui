import Icon from './index.vue';
import type { App } from 'vue';

export { Icon };
console.log(Icon.name);

export default {
  install(app: App) {
    app.component(Icon.name as string, Icon);
  },
};

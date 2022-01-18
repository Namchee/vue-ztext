import { App } from 'vue';

import ZText from '@/components/ZText.vue';

export default {
  install(app: App): void {
    app.component('z-text', ZText);
  },
};

export { ZText };

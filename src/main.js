import Vue from 'vue';
import { routing } from './numl';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import './services/numl';
import './elements/nu-preview';
import './elements/nu-splitpreview';
import './elements/nu-repl';

Vue.config.productionTip = false;

routing.setRouter((url, openNewTab) => {
  // skip outside links and links that open in new tabs
  if (url === '/' || openNewTab || url.startsWith('https://') || url.includes('//') || url.startsWith('mailto:') || url.includes('/api/')) {
    return true;
  }

  router.push(url);

  return false;
});

Vue.config.ignoredElements = [/^nu-/];

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

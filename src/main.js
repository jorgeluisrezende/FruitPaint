import Vue from 'vue';
import Vodal from 'vodal';
import App from './App';

Vue.config.productionTip = false;

Vue.component(Vodal.name, Vodal);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App></App>',
  components: {
    App,
  },
});

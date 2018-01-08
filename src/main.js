import Vue from 'vue';
import Vodal from 'vodal';
import Fabric from '../lib/fabricjs';
import App from './App';

Vue.config.productionTip = false;
window.$fabric = Fabric.fabric;

Vue.component(Vodal.name, Vodal);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App></App>',
  components: {
    App,
  },
});

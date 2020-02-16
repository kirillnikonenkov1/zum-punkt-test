import './assets/scss/main.scss'

window.Vue = require('vue');

Vue.component('example-component', require('./pages/index.vue').default);

const app = new Vue({
  el: '#app'
});



// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.component('my-component', {
    name: 'my-component',
    template: '<div>A custom component!</div>'
});

Vue.component('count', {
    name: 'count',
    props: ['test'],
    data: function () {
  return {
    count: 0
  }
},
    template: '<div>{{count}}{{test}}<button v-on:click="count++">Klicka mig</button></div>'
});

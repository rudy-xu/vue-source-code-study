// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',

  mounted () {
    console.log(this._data.message)
    console.log(this.message)
  },

  // render(createElement) {
  //   return createElement('div', {
  //     attrs: {
  //       id: 'app1'
  //     }
  //   }, this.message);
  // },

  data () {
    return {
      message: 'Hello Vue!'
    }
  } 
  // components: { App },
  // template: '<App/>'
})

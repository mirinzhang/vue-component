'use strict'
import Vue from 'vue'
let Notification = Vue.extend(require('./notify.vue'))

export default {
  install(Vue, options){
    let notify = new Notification()
    notify.id = "notify"
    notify.vm = notify.$mount()
    notify.vm.$appendTo('body')

    Vue.prototype.$notify = notify
  }
}

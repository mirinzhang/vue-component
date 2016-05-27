/**
 * Created by yabing on 16/5/27.
 */
"use strict";
import Vue from "vue"
let Dialog = Vue.extend(require('./dialog.vue'));

export default {
    install: function (Vue, options) {
        let dialog = new Dialog();

        dialog.id = "dialog";
        dialog.vm = dialog.$mount();
        dialog.vm.$appendTo('body');

        Vue.prototype.$dialog = dialog;
    }
}
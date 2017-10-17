import Vue from 'vue';
import io from 'socket.io-client';

import router from './router';
import store from './store';
import app from './vue/app/app.vue';

import 'jquery';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import '../style/index.scss';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(app, {
        ref: 'app'
    }),
    created: function () {
        io();
    }
});
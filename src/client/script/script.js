import Vue from 'vue';
import VueRouter from 'vue-router';
import io from 'socket.io-client';

import router from './router';
import app from './vue/app/app.vue';

import '../style/index.scss';

Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,
    render: h => h(app, {
        ref: 'app'
    }),
    created: function () {
        io();
    }
});
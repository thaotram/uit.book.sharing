import Vue from 'vue';
import VueRouter from 'vue-router';

import homePage from './vue/routes/home/home-page.vue';
import bookPage from './vue/routes/book/book-page.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: '/',
        component: homePage
    }, {
        path: '/book/:id',
        component: bookPage
    }]
});
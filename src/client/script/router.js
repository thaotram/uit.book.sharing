import Vue from 'vue';
import VueRouter from 'vue-router';

import homePage from './vue/routes/home/home-page.vue';
import bookPage from './vue/routes/book/book-page.vue';

import Nanobar from 'nanobar';

Vue.use(VueRouter);

const nanobar = new Nanobar({
    classname: 'my-class',
    id: 'nanobar',
    target: document.getElementById('what')
});

const router = new VueRouter({
    routes: [{
        path: '/',
        component: homePage
    }, {
        path: '/book/:id',
        component: bookPage
    }]
});

router.beforeEach((to, from, next) => {
    nanobar.go(100);
    next();
});

export default router;
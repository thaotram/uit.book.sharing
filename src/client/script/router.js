import Vue from 'vue';
import VueRouter from 'vue-router';

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
        component: require('./vue/routes/_home/_home.vue').default
    }, {
        path: '/Sách',
        component: require('./vue/routes/_book/_book.vue').default
    }, {
        path: '/Sách/:id',
        component: require('./vue/routes/_book.id/_book.id.vue').default
    }]
});

router.beforeEach((to, from, next) => {
    nanobar.go(70);
    next();
});

router.afterEach((to, from) => {
    // console.log(to);
    nanobar.go(100);
});

export default router;
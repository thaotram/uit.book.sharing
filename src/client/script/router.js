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
        path: '/Book',
        component: require('./vue/routes/_book/_book.vue').default
    }, {
        path: '/Book/:id',
        component: require('./vue/routes/_book.id/_book.id.vue').default
    }, {
        path: '/Info',
        component: require('./vue/routes/_about/_about.vue').default
    }]
});

router.beforeEach((to, from, next) => {
    nanobar.go(70);
    next();
});

router.afterEach(() => {
    const body = document.getElementById('body');
    nanobar.go(100);
    if (body) body.scrollTop = 0;
});

export default router;
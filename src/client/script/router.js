import Vue from 'vue';
import VueRouter from 'vue-router';
import Nanobar from 'nanobar';

Vue.use(VueRouter);

const nanobar = new Nanobar({
    classname: 'my-class',
    id: 'nanobar',
    target: document.getElementById('what')
});

const view = (path, name) => ({
    path: path,
    component: require(`./vue/routes/_${name}/_${name}.vue`).default
});

const router = new VueRouter({
    routes: [
        view('/', 'home'),
        view('/book', 'book'),
        view('/book/:title', 'book.title'),
        view('/manager', 'manager'),
        view('/about', 'about')
    ]
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
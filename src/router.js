import Vue from 'vue';
import VueRouter from 'vue-router';
// import Header from './components/Header.vue';
import Bookdetail from './components/Bookdetail.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Bookdetail}
]

const router = new VueRouter({
    routes: routes,
    mode: history
})

export default router;
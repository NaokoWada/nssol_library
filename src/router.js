import Vue from 'vue';
import VueRouter from 'vue-router';
// import Header from './components/Header.vue';
import Bookdetail from './components/Bookdetail.vue';
import BookList from './components/Book_list.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/bookList', component: BookList},
    {path: '/bookList/:id', name: "Bookdetail", component: Bookdetail, props: true},
    {path: '/', component: BookList},
]

const router = new VueRouter({
    routes: routes,
    
})

export default router;
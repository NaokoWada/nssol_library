import Vue from 'vue';
import VueRouter from 'vue-router';
// import Header from './components/Header.vue';
import Bookdetail from './components/Bookdetail.vue';
import BookList from './components/Book_list.vue';
import employee from './components/Employee_detail.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/bookList', component: BookList},
    {path: '/bookList/:id', name: "Bookdetail", component: Bookdetail, props: true},
    {path: '/', component: BookList},
    {path: '/employee', component: BookList},
    {path: '/employee/:id', name: "Employee_detail", component: employee, props: true},
]


const router = new VueRouter({
    routes: routes,
    
})

export default router;
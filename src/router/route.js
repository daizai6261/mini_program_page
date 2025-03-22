
import VueRouter from 'vue-router'
import GuaJi from '@/pages/guaJi/GuaJi.vue';
import HomePage from '@/pages/index/HomePage.vue';
import Vue from 'vue';
import WordPage from "@/pages/wordPage/WordPage.vue";

Vue.use(VueRouter);
const routes = [
    // 以 / 开头的嵌套路径会被当作根路径
    {
        path: "/home",
        component: HomePage,
        name: "HomePage",
        // children: [
        //     { path: "guaJi", component: GuaJi, name: "GuaJi" }
        // ]
    },
    {
        path: "/guaJi",
        component: GuaJi,
        name: "GuaJi",
        // children: [
        //     { path: "guaJi", component: GuaJi, name: "GuaJi" }
        // ]
    },
    {
        path: "/wordPage",
        component: WordPage,
        name: "WordPage",
        // children: [
        //     { path: "guaJi", component: GuaJi, name: "GuaJi" }
        // ]
    },
    { path: "*", redirect: { name: "HomePage" } }
];
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});

export default router;

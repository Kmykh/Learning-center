/**
 * Vue Router
 * @description: Vue Router configuration
 * @docs: https://router.vuejs.org/
 */
import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import AboutComponent from "../public/pages/about.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/home",    component: HomeComponent, meta: { title: "Home"}},
        { path: "/about",   component: AboutComponent, meta: { title: "About us"}},
        { path: "/",        redirect: "/home"},
    ]
});

export default router;
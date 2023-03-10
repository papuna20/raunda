import { createRouter, createWebHistory } from "vue-router";
const home = () => import("../views/Home.vue")
const dashboard = () => import("../views/Dashboard.vue")
const profile = () => import("../views/Profile.vue")
const changeName =() => import("../components/vueFiles/changeName.vue")

const routes = [
    {path: "/", component: home},
    {
        path: "/dashboard", component:dashboard,
        children: [
            {
                path: "profile", component: profile,

            },


        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

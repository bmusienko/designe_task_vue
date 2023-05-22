import { createRouter, createWebHashHistory } from "vue-router";

import CreateDesigne from "./components/CreateDesigne.vue";
import Homepage from "./components/Homepage.vue";
import EditDesigne from "./components/EditDesigne.vue"

const routes = [
    {
        path: "/",
        component: Homepage,
        name: "Homepage"
    },
    {
        path: "/create-designe",
        component: CreateDesigne,
        name: "CreateDesigne"
    },
    {
        path: "/edit-designe/:id",
        component: EditDesigne,
        name: "EditDesigne"
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes: routes
})
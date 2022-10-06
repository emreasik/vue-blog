import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/Home/Home"
import AboutMe from "@/pages/AboutMe/AboutMe"
import Posts from "@/pages/Posts/Posts"

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/aboutme",
        name: "AboutMe",
        component: AboutMe
    },
    {
        path: "/posts",
        name: "PostsPage",
        component: Posts,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
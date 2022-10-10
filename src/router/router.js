import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/Home/Home"
import AboutMe from "@/pages/AboutMe/AboutMe"
import Posts from "@/pages/Posts/Posts"
import PostDetails from "@/pages/PostDetails/PostDetails"
import PostsByCategory from "@/pages/Posts/PostsByCategory/PostsByCategory"

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
    },
    {
        path: "/postdetail/:id",
        name: "PostDetailPage",
        component: PostDetails
    },
    {
        path: "/posts/:category",
        name: "PostsByCategory",
        component: PostsByCategory
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "厝喵 HOMEOW",
    component: Home,
  },
  {
    path: "/",
    name: "What?",
    component: Home,
  },
  {
    path: "/",
    name: "How?",
    component: Home,
  },
  {
    path: "/",
    name: "FAQ",
    component: Home,
  },
  {
    path: "/",
    name: "RoadMap",
    component: Home,
  },
  {
    path: "/",
    name: "Release",
    component: Home,
  },
  {
    path: "/",
    name: "Team",
    component: Home,
  },
  {
    path: "/about",
    name: "Help Cat Have Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

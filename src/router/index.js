import Vue from "vue";
import VueRouter from "vue-router";
import Watchers from "../views/Watchers.vue";
import Stars from "../views/Stars.vue";
import Forks from "../views/Forks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/watchers",
    name: "Watchers",
    component: Watchers,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/stars",
    name: "Stars",
    component: Stars,
  },
  {
    path: "/forks",
    name: "Forks",
    component: Forks,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

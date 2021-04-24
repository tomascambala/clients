import Vue from "vue";
import VueRouter from "vue-router";
import Clients from "../views/Clients.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/clients"
  },
  {
    path: "/clients",
    name: "Clients",
    component: Clients,
  },
  {
    path: "/home",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

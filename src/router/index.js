import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/login/index")
  },
  {
    path: "/",
    name: 'Layout',
    component: () => import("../views/layout/index"),
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("../views/home/index")
      },
      {
        path: "catalogue",
        name: "Catalogue",
        component: () => import("../views/catalogue/index")
      },
      {
        path: "cart",
        name: "Cart",
        component: () => import("../views/cart/index")
      },
      {
        path: "mine",
        name: "Mine",
        component: () => import("../views/mine/index")
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

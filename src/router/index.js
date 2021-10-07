import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cotizador from "../views/Cotizador.vue";
//import CotizadorMaestro from "../views/CotizadorMaestro.vue";
//import CotizadorInforme from "../views/CotizadorInforme.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cotizador",
    component: Cotizador,
    children: [
      // UserProfile will be rendered inside User's <router-view>
      // when /cotizador/maestro is matched
      { path: "maestro", component: () => import('../views/CotizadorMaestro.vue')/* CotizadorMaestro */ },

      // UserPosts will be rendered inside User's <router-view>
      // when /cotizador/informe is matched
      { path: "informe", component: () => import('../views/CotizadorInforme.vue')/* component: CotizadorInforme */ },
    ],
  },
  
  /*   {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  } */
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

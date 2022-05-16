import { createWebHistory, createRouter } from "vue-router";
import About from "@/views/About";
import Home from "@/views/Home";
import Error from "@/views/Error";
import CoinDetail from "@/views/CoinDetail"

const history = createWebHistory();

const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail,
    },
    {
      path: "/:catchall(.*)",
      name: "Error",
      component: Error,
    },
  ],
});

export default router;

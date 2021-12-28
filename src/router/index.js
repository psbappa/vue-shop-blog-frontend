import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home/Home";
import BudgetPlanner from '../components/test/BudgetPlanner/BudgetPlanner'
import Test from '../components/test/ParentTest'
import Shop from '../views/shop/Shop.vue'
import Cart from '../components/shop/Cart.vue'
import PathNotFound from '../views/shop/PathNotFound.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/budget",
    name: "BudgetPlanner",
    component: BudgetPlanner,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/tests",
    name: "Test",
    component: Test,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  { path: '/:pathMatch(.*)*', component: PathNotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

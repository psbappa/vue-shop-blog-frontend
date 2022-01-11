import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home/Home";
import BudgetPlanner from '../components/test/BudgetPlanner/BudgetPlanner'
import Test from '../components/test/ParentTest'
import Movies from '../components/test/Movies/Movies.vue'
import Shop from '../views/shop/Shop.vue'
import Admin from '../components/shop/Admin/Admin.vue'
import Cart from '../components/shop/Cart.vue'
import Login from '../components/accounts/Login.vue'
import Registration from '../components/accounts/Registration.vue'
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
    path: "/axios",
    name: "Movies",
    component: Movies,
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
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/admin-shop",
    name: "Admin",
    component: Admin,
  },
  { path: '/:pathMatch(.*)*', component: PathNotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

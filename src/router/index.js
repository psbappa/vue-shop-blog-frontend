import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home/Home";
import BudgetPlanner from '../components/test/BudgetPlanner/BudgetPlanner'
import Test from '../components/test/ParentTest'

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

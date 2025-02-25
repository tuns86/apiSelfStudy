import { createRouter, createWebHistory } from "vue-router";
import CompanyPage from "../views/CompanyPage/CompanyPage.vue";
import HomePage from "../views/HomePage/HomePage.vue";
import SearchPage from "../views/SearchPage/SearchPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/search",
    component: SearchPage,
  },
  {
    path: "/company/:ticker",
    component: CompanyPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

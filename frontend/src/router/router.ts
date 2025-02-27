import BalanceSheet from "@/components/BalanceSheet/BalanceSheet.vue";
import CompanyProfile from "@/components/CompanyProfile/CompanyProfile.vue";
import IncomeStatement from "@/components/IncomeStatement/IncomeStatement.vue";
import DesignGuide from "@/views/DesignGuide/DesignGuide.vue";
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
    path: "/design-guide",
    component: DesignGuide,
  },
  {
    path: "/company/:ticker",
    component: CompanyPage,
    children: [
      { path: "company-profile", component: CompanyProfile },
      { path: "income-statement", component: IncomeStatement },
      { path: "balance-sheet", component: BalanceSheet },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

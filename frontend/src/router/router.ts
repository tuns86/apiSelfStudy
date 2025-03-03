import BalanceSheet from "@/components/BalanceSheet/BalanceSheet.vue";
import CashflowStatement from "@/components/CashflowStatement/CashflowStatement.vue";
import CompanyProfile from "@/components/CompanyProfile/CompanyProfile.vue";
import HistoricalDividend from "@/components/HistoricalDividend/HistoricalDividend.vue";
import IncomeStatement from "@/components/IncomeStatement/IncomeStatement.vue";
import { useAuthStore } from "@/context/UseAuth.ts";
import RegisterPage from "@/views/RegisterPage/RegisterPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import CompanyPage from "../views/CompanyPage/CompanyPage.vue";
import DesignGuide from "../views/DesignGuide/DesignGuide.vue";
import HomePage from "../views/HomePage/HomePage.vue";
import LoginPage from "../views/LoginPage/LoginPage.vue";
import SearchPage from "../views/SearchPage/SearchPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/search",
    component: SearchPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/design-guide",
    component: DesignGuide,
  },
  {
    path: "/company/:ticker",
    component: CompanyPage,
    meta: { requiresAuth: true },
    children: [
      { path: "company-profile", component: CompanyProfile },
      { path: "income-statement", component: IncomeStatement },
      { path: "balance-sheet", component: BalanceSheet },
      { path: "cashflow-statement", component: CashflowStatement },
      { path: "historical-dividend", component: HistoricalDividend },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next({ path: "/login", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;

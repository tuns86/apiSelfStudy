import BalanceSheet from "@/components/BalanceSheet/BalanceSheet.vue";
import CashflowStatement from "@/components/CashflowStatement/CashflowStatement.vue";
import CompanyProfile from "@/components/CompanyProfile/CompanyProfile.vue";
import HistoricalDividend from "@/components/HistoricalDividend/HistoricalDividend.vue";
import IncomeStatement from "@/components/IncomeStatement/IncomeStatement.vue";
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

export default router;

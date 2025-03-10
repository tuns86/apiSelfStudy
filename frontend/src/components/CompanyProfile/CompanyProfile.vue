<script setup lang="ts">
import { getKeyMetrics } from "@/api";
import type { CompanyKeyMetrics } from "@/company";
import RatioList from "@/components/RatioList/RatioList.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import {
  formatLargeNonMonetaryNumber,
  formatRatio,
} from "../../helpers/NumberFormatting";
import Spinner from "../Spinners/Spinner.vue";
import StockComment from "../StockComment/StockComment.vue";

const config = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNonMonetaryNumber(company.marketCapTTM),
    subTitle: "Total value of all a company's shares of stock",
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => formatRatio(company.currentRatioTTM),
    subTitle: "Measures the companies ability to pay short term debt obligations",
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => formatRatio(company.roeTTM),
    subTitle:
      "Return on equity is the measure of a company's net income divided by its shareholder's equity",
  },
  {
    label: "Return On Assets",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.returnOnTangibleAssetsTTM),
    subTitle:
      "Return on assets is the measure of how effective a company is using its assets",
  },
  {
    label: "Free Cashflow Per Share",
    render: (company: CompanyKeyMetrics) => formatRatio(company.freeCashFlowPerShareTTM),
    subTitle:
      "Return on assets is the measure of how effective a company is using its assets",
  },
  {
    label: "Book Value Per Share TTM",
    render: (company: CompanyKeyMetrics) => formatRatio(company.bookValuePerShareTTM),
    subTitle:
      "Book value per share indicates a firm's net asset value (total assets - total liabilities) on per share basis",
  },
  {
    label: "Divdend Yield TTM",
    render: (company: CompanyKeyMetrics) => formatRatio(company.dividendYieldTTM),
    subTitle: "Shows how much a company pays each year relative to stock price",
  },
  {
    label: "Capex Per Share TTM",
    render: (company: CompanyKeyMetrics) => formatRatio(company.capexPerShareTTM),
    subTitle:
      "Capex is used by a company to aquire, upgrade, and maintain physical assets",
  },
  {
    label: "Graham Number",
    render: (company: CompanyKeyMetrics) => formatRatio(company.grahamNumberTTM),
    subTitle:
      "This is the upperbouind of the price range that a defensive investor should pay for a stock",
  },
  {
    label: "PE Ratio",
    render: (company: CompanyKeyMetrics) => formatRatio(company.peRatioTTM),
    subTitle:
      "This is the upperbouind of the price range that a defensive investor should pay for a stock",
  },
];

const route = useRoute();
const ticker = route.params.ticker as string;

const companyData = ref<CompanyKeyMetrics>();

const getCompanyKeyRatios = async () => {
  const value = await getKeyMetrics(ticker);
  companyData.value = value?.data[0];
};

onMounted(() => {
  getCompanyKeyRatios();
});
</script>

<template>
  <div id="companyProfile" v-if="companyData">
    <RatioList v-if="companyData" :config="config" :data="companyData" />
    <StockComment :stockSymbol="ticker" />
  </div>
  <div id="companyProfile" v-else>
    <Spinner />
  </div>
</template>

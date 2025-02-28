<script setup lang="ts">
import { getBalanceSheet } from "@/api";
import type { CompanyBalanceSheet } from "@/company";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { formatLargeMonetaryNumber } from "../../helpers/NumberFormatting";
import RatioList from "../RatioList/RatioList.vue";
import Spinner from "../Spinners/Spinner.vue";

const config = [
  {
    label: "Total Assets",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.totalAssets),
  },
  {
    label: "Current Assets",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.totalCurrentAssets),
  },
  {
    label: "Total Cash",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.cashAndCashEquivalents),
  },
  {
    label: "Property & equipment",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.propertyPlantEquipmentNet),
  },
  {
    label: "Intangible Assets",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.intangibleAssets),
  },
  {
    label: "Long Term Debt",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.longTermDebt),
  },
  {
    label: "Total Debt",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.otherCurrentLiabilities),
  },
  {
    label: "Total Liabilities",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.totalLiabilities),
  },
  {
    label: "Current Liabilities",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.totalCurrentLiabilities),
  },
  {
    label: "Long-Term Debt",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.longTermDebt),
  },
  {
    label: "Long-Term Income Taxes",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.otherLiabilities),
  },
  {
    label: "Stakeholder's Equity",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.totalStockholdersEquity),
  },
  {
    label: "Retained Earnings",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.retainedEarnings),
  },
];

const route = useRoute();
const ticker = route.params.ticker as string;

const companyData = ref<CompanyBalanceSheet>();

const getCompanyBalanceSheet = async () => {
  const value = await getBalanceSheet(ticker!);
  companyData.value = value?.data[0];
};

onMounted(() => {
  getCompanyBalanceSheet();
});
</script>

<template>
  <div>
    <RatioList v-if="companyData" :config="config" :data="companyData" />
    <Spinner v-else></Spinner>
  </div>
</template>

<style scoped></style>

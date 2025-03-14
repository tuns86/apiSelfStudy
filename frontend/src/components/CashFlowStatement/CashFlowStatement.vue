<script setup lang="ts">
import { getCashFlowStatement } from "@/api";
import type { CompanyCashFlow } from "@/company";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { formatLargeMonetaryNumber } from "../../helpers/NumberFormatting";
import Spinner from "../Spinners/Spinner.vue";
import Table from "../Table/Table.vue";

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.operatingCashFlow),
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.netCashUsedProvidedByFinancingActivities),
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.capitalExpenditure),
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.commonStockIssued),
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.freeCashFlow),
  },
];

const route = useRoute();
const ticker = route.params.ticker as string;

const cashFlowData = ref<CompanyCashFlow[]>();

onMounted(async () => {
  try {
    const result = await getCashFlowStatement(ticker);
    cashFlowData.value = result?.data;
  } catch (error) {
    console.error("Error fetching income statement:", error);
  }
});

// const getCashflowStatement = async () => {
//   const value = await getCashFlowStatement(ticker);
//   cashFlowData.value = value?.data;
// };

// onMounted(() => {
//   getCashflowStatement();
// });
</script>

<template>
  <div>
    <Table v-if="cashFlowData" :config="config" :data="cashFlowData" />
    <Spinner v-else></Spinner>
  </div>
</template>

<style scoped></style>

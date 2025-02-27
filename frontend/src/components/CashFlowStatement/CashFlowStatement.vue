<script setup lang="ts">
import { getCashFlowStatement } from "@/api";
import type { CompanyCashFlow } from "@/company";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Table from "../Table/Table.vue";

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) => company.operatingCashFlow,
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) => company.netCashUsedForInvestingActivites,
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedProvidedByFinancingActivities,
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) => company.capitalExpenditure,
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) => company.commonStockIssued,
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) => company.freeCashFlow,
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
    <h1 v-else>No result</h1>
  </div>
</template>

<style scoped></style>

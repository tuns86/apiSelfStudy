<script setup lang="ts">
import { getIncomeStatement } from "@/api";
import type { CompanyIncomeStatement } from "@/company";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Table from "../Table/Table.vue";

const configs = [
  {
    label: "Date",
    render: (company: CompanyIncomeStatement) => company.date,
  },
  {
    label: "Revenue",
    render: (company: CompanyIncomeStatement) => company.revenue,
  },
  {
    label: "Cost Of Revenue",
    render: (company: CompanyIncomeStatement) => company.costOfRevenue,
  },
  {
    label: "Depreciation",
    render: (company: CompanyIncomeStatement) => company.depreciationAndAmortization,
  },
  {
    label: "Operating Income",
    render: (company: CompanyIncomeStatement) => company.operatingIncome,
  },
  {
    label: "Income Before Taxes",
    render: (company: CompanyIncomeStatement) => company.incomeBeforeTax,
  },
  {
    label: "Net Income",
    render: (company: CompanyIncomeStatement) => company.netIncome,
  },
  {
    label: "Net Income Ratio",
    render: (company: CompanyIncomeStatement) => company.netIncomeRatio,
  },
  {
    label: "Earnings Per Share",
    render: (company: CompanyIncomeStatement) => company.eps,
  },
  {
    label: "Earnings Per Diluted",
    render: (company: CompanyIncomeStatement) => company.epsdiluted,
  },
  {
    label: "Gross Profit Ratio",
    render: (company: CompanyIncomeStatement) => company.grossProfitRatio,
  },
  {
    label: "Opearting Income Ratio",
    render: (company: CompanyIncomeStatement) => company.operatingIncomeRatio,
  },
  {
    label: "Income Before Taxes Ratio",
    render: (company: CompanyIncomeStatement) => company.incomeBeforeTaxRatio,
  },
];

const route = useRoute();
const ticker = route.params.ticker as string;

const incomeStatement = ref<CompanyIncomeStatement[]>();

onMounted(async () => {
  try {
    const result = await getIncomeStatement(ticker);
    incomeStatement.value = result?.data;
  } catch (error) {
    console.error("Error fetching income statement:", error);
  }
});
</script>

<template>
  <div>
    <Table v-if="incomeStatement" :config="configs" :data="incomeStatement" />
    <h1 v-else>Could not find income statement.</h1>
  </div>
</template>

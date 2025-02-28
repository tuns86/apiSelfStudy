<script setup lang="ts">
import { getIncomeStatement } from "@/api";
import type { CompanyIncomeStatement } from "@/company";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { formatLargeMonetaryNumber, formatRatio } from "../../helpers/NumberFormatting";
import Spinner from "../Spinners/Spinner.vue";
import Table from "../Table/Table.vue";

const configs = [
  {
    label: "Date",
    render: (company: CompanyIncomeStatement) => company.date,
  },
  {
    label: "Revenue",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.revenue),
  },
  {
    label: "Cost Of Revenue",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.costOfRevenue),
  },
  {
    label: "Depreciation",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.depreciationAndAmortization),
  },
  {
    label: "Operating Income",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.operatingIncome),
  },
  {
    label: "Income Before Taxes",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.incomeBeforeTax),
  },
  {
    label: "Net Income",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.netIncome),
  },
  {
    label: "Net Income Ratio",
    render: (company: CompanyIncomeStatement) => formatRatio(company.netIncomeRatio),
  },
  {
    label: "Earnings Per Share",
    render: (company: CompanyIncomeStatement) => formatRatio(company.eps),
  },
  {
    label: "Earnings Per Diluted",
    render: (company: CompanyIncomeStatement) => formatRatio(company.epsdiluted),
  },
  {
    label: "Gross Profit Ratio",
    render: (company: CompanyIncomeStatement) => formatRatio(company.grossProfitRatio),
  },
  {
    label: "Opearting Income Ratio",
    render: (company: CompanyIncomeStatement) =>
      formatRatio(company.operatingIncomeRatio),
  },
  {
    label: "Income Before Taxes Ratio",
    render: (company: CompanyIncomeStatement) =>
      formatRatio(company.incomeBeforeTaxRatio),
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
    <Spinner v-else></Spinner>
  </div>
</template>

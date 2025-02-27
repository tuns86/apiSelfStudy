<script setup lang="ts">
import { getBalanceSheet } from '@/api';
import type { CompanyBalanceSheet } from '@/company';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import RatioList from '../RatioList/RatioList.vue';

const config = [
  {
    label: "Total Assets",
    render: (company: CompanyBalanceSheet) => company.totalAssets,
  },
  {
    label: "Current Assets",
    render: (company: CompanyBalanceSheet) => company.totalCurrentAssets,
  },
  {
    label: "Total Cash",
    render: (company: CompanyBalanceSheet) => company.cashAndCashEquivalents,
  },
  {
    label: "Property & equipment",
    render: (company: CompanyBalanceSheet) => company.propertyPlantEquipmentNet,
  },
  {
    label: "Intangible Assets",
    render: (company: CompanyBalanceSheet) => company.intangibleAssets,
  },
  {
    label: "Long Term Debt",
    render: (company: CompanyBalanceSheet) => company.longTermDebt,
  },
  {
    label: "Total Debt",
    render: (company: CompanyBalanceSheet) => company.otherCurrentLiabilities,
  },
  {
    label: "Total Liabilites",
    render: (company: CompanyBalanceSheet) => company.totalLiabilities,
  },
  {
    label: "Current Liabilities",
    render: (company: CompanyBalanceSheet) => company.totalCurrentLiabilities,
  },
  {
    label: "Long-Term Debt",
    render: (company: CompanyBalanceSheet) => company.longTermDebt,
  },
  {
    label: "Long-Term Income Taxes",
    render: (company: CompanyBalanceSheet) => company.otherLiabilities,
  },
  {
    label: "Stakeholder's Equity",
    render: (company: CompanyBalanceSheet) => company.totalStockholdersEquity,
  },
  {
    label: "Retained Earnings",
    render: (company: CompanyBalanceSheet) => company.retainedEarnings,
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
    <h1 v-else>Company data not found</h1>
  </div>
</template>

<style scoped>

</style>

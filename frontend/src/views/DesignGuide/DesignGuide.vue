<script setup lang="ts">
import RatioList from '@/components/RatioList/RatioList.vue';
import Table from '@/components/Table/Table.vue';
import { testIncomeStatementData } from '@/components/Table/testData';

const data = testIncomeStatementData;

const tableConfig = [
  {
    label: "symbol",
    render: (company: any) => company.symbol,
  },
];

</script>
<template>
  <h1>
    Design guide- This is the design guide for Fin Shark. These are reuable
    components of the app with brief instructions on how to use them.
  </h1>
  <RatioList :config={tableConfig} :data={testIncomeStatementData} />
  <Table :config={tableConfig} :data={data} />
  <h3>
    Table - Table takes in a configuration object and company data as
    params. Use the config to style your table.
  </h3>
</template>

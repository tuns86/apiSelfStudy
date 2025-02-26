<script setup lang="ts">
import { ref } from 'vue';
import { testIncomeStatementData } from './testData';

const data = ref(testIncomeStatementData);

type Company = typeof testIncomeStatementData[number];

const configs = [
  {
    label: "Year",
    render: (company: Company) => company.acceptedDate,
  },
  {
    label: "Cost of Revenue",
    render: (company: Company) => company.costOfRevenue,
  },
];
</script>
<template>
  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
    <table class="min-w-full divide-y divide-gray-200 m-5">
      <thead class="bg-gray-50">
        <tr>
          <th v-for="config in configs" :key="config.label"
            class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            {{ config.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="company in data" :key="company.cik">
          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
            {{ configs[0].render(company) }}
          </td>
          <td class="p-3">
            {{ configs[1].render(company) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

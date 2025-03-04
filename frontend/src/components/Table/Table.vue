<script setup lang="ts">
defineProps<{
  config: any;
  data: any;
}>();
</script>
<template>
  <div class="bg-black shadow rounded-lg p-4 sm:p-6 xl:p-8">
    <table class="min-w-full divide-y divide-gray-200 m-5">
      <thead class="bg-black">
        <tr>
          <th
            v-for="header in config"
            :key="header.label"
            class="p-4 text-left text-xs font-medium text-white uppercase tracking-wider"
          >
            {{ header.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="company in data" :key="company.cik">
          <td v-for="val in config" :key="val.label" class="p-3 text-sm">
            {{ val.render(company) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

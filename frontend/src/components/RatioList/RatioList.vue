<script setup lang="ts">
import { computed } from "vue";
import { TestDataCompany } from "../Table/testData";

const data = TestDataCompany[0];

type Company = typeof data;

const config = [
  {
    label: "Comapany Name",
    render: (company: Company) => company.companyName,
    subTitle: "This is the name of the company",
  },
  // { label: "Name", render: (company: Company) => company.companyName },
  // {
  //   label: "DCF",
  //   render: (company: Company) => company.dcf,
  //   subTitle:
  //     "This is the value of an investment today based on future cash flows",
  // },
  // { label: "Beta", render: (company: Company) => company.beta },
];

const renderedCells = computed(() => {
  return config.map((row) => ({
    label: row.label,
    value: row.render(data),
    subTitle: row.subTitle,
  }));
});
</script>

<template>
  <div class="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
    <ul class="divide-y divide-gray-200">
      <li v-for="row in renderedCells" class="py-3 sm:py-4">
        <div class="flex items-center space-x-4">
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">
              {{ row.label }}
            </p>
            <p v-if="row.subTitle" class="text-sm text-gray-500 truncate">
              <a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                data-cfemail="17727a767e7b57607e7973646372653974787a">
                {{ row.subTitle }}
              </a>
            </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900">
            {{ row.value }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<template>
  <div className="inline-flex rounded-md shadow-sm m-4" role="group">
    <TenKFinderItem
      v-if="companyData"
      v-for="(tenK, index) in companyData.slice(0, 5)"
      :tenK="tenK"
    />
    <Spinner v-else />
  </div>
</template>

<script setup lang="ts">
import { getTenK } from "@/api";
import type { CompanyTenK } from "@/company";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Spinner from "../Spinners/Spinner.vue";
import TenKFinderItem from "../TenKFinderItem/TenKFinderItem.vue";

const route = useRoute();
const ticker = route.params.ticker as string;

const companyData = ref<CompanyTenK[]>();

const getTenKData = async () => {
  const value = await getTenK(ticker!);
  companyData.value = value?.data;
};

onMounted(() => {
  getTenKData();
});
</script>

<style scoped></style>

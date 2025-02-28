<script setup lang="ts">
import { getCompData } from "@/api";
import type { CompanyCompData } from "@/company";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import CompFinderItem from "../CompFinderItem/CompFinderItem.vue";
import Spinner from "../Spinners/Spinner.vue";

const route = useRoute();
const ticker = route.params.ticker as string;

const companyData = ref<CompanyCompData>();

const getComps = async () => {
  const value = await getCompData(ticker!);
  companyData.value = value?.data[0];
};

onMounted(() => {
  getComps();
});
</script>

<template>
  <div class="inline-flex rounded-md shadow-sm m-4" role="group">
    <CompFinderItem
      v-if="companyData"
      v-for="peer in companyData?.peersList"
      :ticker="peer"
    />
    <Spinner v-else />
  </div>
</template>

<style scoped></style>

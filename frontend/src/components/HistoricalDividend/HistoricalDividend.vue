<template>
  <div v-if="dividend && dividend.length > 0">
    <SimpleLineChart :data="dividend" xAxis="label" dataKey="dividend" />
  </div>
  <h1 v-else class="ml-3">Company does not have a dividend!</h1>
</template>

<script setup lang="ts">
import { getHistoricalDividend } from "@/api";
import type { Dividend } from "@/company";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import SimpleLineChart from "../SimpleLineChart/SimpleLineChart.vue";

const route = useRoute();
const ticker = route.params.ticker as string;

const dividend = ref<Dividend[]>();

const fetchHistoricalDividend = async () => {
  const value = await getHistoricalDividend(ticker!);
  dividend.value = value?.data.historical
    .slice(0, 18)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

onMounted(() => {
  fetchHistoricalDividend();
});
</script>

<style scoped></style>

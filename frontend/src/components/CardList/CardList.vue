<script setup lang="ts">
import type { CompanySearch } from "@/company";
import Card from "@/components/Card/Card.vue";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "portfolioCreate", symbol: string): void;
}>();

const onPortfolioCreate = (symbol: string) => {
  emit("portfolioCreate", symbol);
};
</script>

<template>
   <div v-if="props.searchResults.length > 0">
    <Card
      v-for="result in props.searchResults"
      :key="uuidv4()"
      :id="result.symbol"
      :searchResult="result"
      @portfolioCreate="onPortfolioCreate"
    />
  </div>
  <h1 v-else>No results!</h1>
</template>

<style scoped>
@import "./CardList.css";
</style>

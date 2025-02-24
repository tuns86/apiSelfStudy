<script setup lang="ts">
import type { CompanySearch } from '@/company';
import AddPortfolio from "@/components/Portfolio/AddPortfolio/AddPortfolio.vue";

interface Props {
  id: string;
  searchResult: CompanySearch;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "portfolioCreate", symbol: string): void;
}>();

const onPortfolioCreate = (symbol: string) => {
  emit("portfolioCreate", symbol);
}
</script>

<template>
  <div :key="id" :id="id" class="card">
    <div class="details">
      <h2>
        {{ props.searchResult.name }} ({{ props.searchResult.symbol }})
      </h2>
      <p>{{ props.searchResult.currency }}</p>
    </div>
    <p class="info">
      {{ props.searchResult.exchangeShortName }} - {{ props.searchResult.stockExchange }}
    </p>
    <AddPortfolio @portfolioCreate="onPortfolioCreate" :symbol="props.searchResult.symbol" />
  </div>
</template>

<style scoped>
@import "./Card.css";
</style>

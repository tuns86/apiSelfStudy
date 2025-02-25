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
  emit("portfolioCreate", symbol); // Phát sự kiện lên CardList.vue
};
</script>

<template>
  <div class="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row" :id="id">
    <router-link :to="`/company/${props.searchResult.symbol}`" class="font-bold text-center text-veryDarkViolet md:text-left">
      {{ props.searchResult.name }} ({{ props.searchResult.symbol }})
    </router-link>
    <p class="text-veryDarkBlue">{{ props.searchResult.currency }}</p>
    <p class="font-bold text-veryDarkBlue">
      {{ props.searchResult.exchangeShortName }} - {{ props.searchResult.stockExchange }}
    </p>
    <AddPortfolio @portfolioCreate="onPortfolioCreate" :symbol="searchResult.symbol" />
  </div>
</template>

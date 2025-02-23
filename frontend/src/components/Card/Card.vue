<script setup lang="ts">
import type { CompanySearch } from '@/company';

interface Props {
  id: string;
  searchResult: CompanySearch;
}

defineProps<Props>();
</script>

<template>
  <div :key="id" :id="id" class="card">
    <div class="details">
      <h2>
        {{ searchResult.name }} ({{ searchResult.symbol }})
      </h2>
      <p>{{ searchResult.currency }}</p>
    </div>
    <p class="info">
      {{ searchResult.exchangeShortName }} - {{ searchResult.stockExchange }}
    </p>
  </div>
</template>

<style scoped>
@import "@/assets/Card/Card.css";
</style>

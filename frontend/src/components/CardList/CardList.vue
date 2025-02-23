<script setup lang="ts">
import type { CompanySearch } from "@/company";
import Card from "@/components/Card/Card.vue";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
}

const props = defineProps<Props>();
</script>

<template>
  <div v-if="props.searchResults.length > 0">
    <Card
    v-for="result in props.searchResults"
    :id="result.symbol"
    :key="uuidv4()"
    :searchResult="result"
  />
  </div>
  <h1 v-else>No results</h1>
</template>

<style scoped>
@import "@/assets/CardList/CardList.css";
</style>

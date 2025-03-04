<script setup lang="ts">
import type { CompanySearch } from "@/company";
import Card from "@/components/Card/Card.vue";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
  portfolioCreate: (symbol: string) => void;
}

const props = defineProps<Props>();
</script>

<template>
  <div>
    <template v-if="searchResults.length > 0">
      <Card
        v-for="result in props.searchResults"
        :key="uuidv4()"
        :id="result.symbol"
        :searchResult="result"
        :portfolioCreate="props.portfolioCreate"
      />
    </template>
    <p v-else class="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
      No results!
    </p>
  </div>
</template>

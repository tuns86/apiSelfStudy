<script setup lang="ts">
import { searchCompanies } from "@/api";
import type { CompanySearch } from "@/company";
import CardList from "@/components/CardList/CardList.vue";
import ListPortfolio from "@/components/Portfolio/ListPortfolio/ListPortfolio.vue";
import Search from "@/components/Search/Search.vue";
import { ref } from "vue";

const search = ref<string>("");
const portfolioValues = ref<string[]>([]);
const searchResult = ref<CompanySearch[]>([]);
const serverError = ref<string | null>(null);

const handleSearchChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  search.value = target.value;
};

const onPortfolioCreate = (symbol: string) => {
  if (!symbol || portfolioValues.value.includes(symbol)) return;
  portfolioValues.value.push(symbol);
};

const onPortfolioDelete = (symbol: string) => {
  portfolioValues.value = portfolioValues.value.filter((value) => value !== symbol);
};

const onSearchSubmit = async (e: Event) => {
  e.preventDefault();
  const result = await searchCompanies(search.value);
  if (typeof result === "string") {
    serverError.value = result;
  } else if (Array.isArray(result)) {
    searchResult.value = [...result];
  }
};
</script>

<template>
  <div class="Search">
    <Search
      :onSearchSubmit="onSearchSubmit"
      :search="search"
      :handleSearchChange="handleSearchChange"
    />
    <div v-if="serverError">Unable to connect to API</div>
    <ListPortfolio
      :portfolioValues="portfolioValues"
      :onPortfolioDelete="onPortfolioDelete"
    />
    <CardList :searchResults="searchResult" @portfolioCreate="onPortfolioCreate" />
  </div>
</template>

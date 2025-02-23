<script setup lang="ts">
import { ref } from "vue";
import { searchCompanies } from './api';
import type { CompanySearch } from "./company";
import CardList from "./components/CardList/CardList.vue";
import Search from "./components/Search/Search.vue";

const search = ref<string>('');
const searchResult = ref<CompanySearch[]>([]);
const serverError = ref<string | null>(null);

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  search.value = target.value;
  console.log(e);
};

const onClick = async () => {

  const result = await searchCompanies(search.value);
  if (typeof result === "string") {
    serverError.value = result;
  } else if (Array.isArray(result)) {
    searchResult.value = [...result];
  }
  console.log(searchResult.value);
};
</script>

<template>
  <div class="App">
    <Search :onClick="onClick" :search="search" :handleChange="handleChange" />
    <div v-if="serverError">Unable to connect to API</div>
    <CardList :searchResults="searchResult" />
  </div>
</template>

<style scoped>
@import "@/assets/App.css";
</style>

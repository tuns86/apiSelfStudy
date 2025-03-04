<script setup lang="ts">
import { searchCompanies } from "@/api";
import type { CompanySearch } from "@/company";
import CardList from "@/components/CardList/CardList.vue";
import ListPortfolio from "@/components/Portfolio/ListPortfolio/ListPortfolio.vue";
import Search from "@/components/Search/Search.vue";
import type { PortfolioGet } from "@/models/Portfolio";
import {
  portfolioAddAPI,
  portfolioDeleteAPI,
  portfolioGetAPI,
} from "@/services/PortfolioService";
import { onMounted, ref } from "vue";
import { useToast } from "vue-toastification";

const search = ref<string>("");
const searchResult = ref<CompanySearch[]>([]);
const serverError = ref<string | null>(null);
const portfolioValues = ref<PortfolioGet[] | null>();
const toast = useToast();

const getPortfolio = async () => {
  try {
    const res = await portfolioGetAPI();
    if (res) {
      portfolioValues.value = res?.data;
    }
  } catch (err) {
    portfolioValues.value = null;
  }
};

onMounted(() => {
  getPortfolio();
});

const onPortfolioCreate = async (symbol: string) => {
  const res = await portfolioAddAPI(symbol);
  if (res?.status === 204) {
    toast.success("Stock added to portfolio!");
    getPortfolio();
  }
};

const onPortfolioDelete = async (symbol: string) => {
  const res = await portfolioDeleteAPI(symbol);
  if (res?.status === 200) {
    toast.success("Stock deleted from portfolio!");
    getPortfolio();
  }
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

const handleSearchChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  search.value = target.value;
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
      :portfolioValues="portfolioValues || []"
      :onPortfolioDelete="onPortfolioDelete"
    />
    <CardList :searchResults="searchResult" :portfolioCreate="onPortfolioCreate" />
  </div>
</template>

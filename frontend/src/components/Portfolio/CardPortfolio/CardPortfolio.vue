<script setup lang="ts">
import type { PortfolioGet } from "@/models/Portfolio";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio.vue";

interface Props {
  portfolioValue: PortfolioGet;
  onPortfolioDelete: (symbol: string) => void;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="flex flex-col w-full p-8 space-y-4 text-center border-2 rounded-lg border-lightGreen shadow-lg md:w-1/3"
  >
    <router-link
      :to="`/company/${props.portfolioValue.symbol}/company-profile`"
      class="pt-6 text-xl font-bold"
    >
      {{ props.portfolioValue.symbol }}
    </router-link>
    <DeletePortfolio
      :symbol="props.portfolioValue.symbol"
      :portfolioDelete="props.onPortfolioDelete"
    />
  </div>
</template>

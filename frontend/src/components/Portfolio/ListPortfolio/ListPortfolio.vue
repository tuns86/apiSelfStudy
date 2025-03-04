<script setup lang="ts">
import type { PortfolioGet } from "@/models/Portfolio";
import CardPortfolio from "../CardPortfolio/CardPortfolio.vue";

interface Props {
  portfolioValues: PortfolioGet[];
  onPortfolioDelete: (symbol: string) => void;
}

const props = defineProps<Props>();
</script>

<template>
  <section id="portfolio">
    <h2 class="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">My Portfolio</h2>
    <div
      class="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row"
    >
      <template v-if="props.portfolioValues.length > 0">
        <CardPortfolio
          v-for="portfolioValue in props.portfolioValues"
          :portfolioValue="portfolioValue"
          :onPortfolioDelete="props.onPortfolioDelete"
        />
      </template>
    </div>
  </section>
</template>

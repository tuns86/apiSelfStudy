<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio.vue";

interface Props {
  portfolioValue: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "portfolioDelete", symbol: string): void;
}>();

const onDelete = () => {
  emit("portfolioDelete", props.portfolioValue);
};
</script>

<template>
  <div class="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
    <p class="pt-6 text-xl font-bold">{{ portfolioValue }}</p>
    <DeletePortfolio :portfolioValue="portfolioValue" @portfolioDelete="onDelete" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

interface Props {
  symbol: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "portfolioCreate", symbol: string): void;
}>();

const onSubmit = (event: Event) => {
  event.preventDefault();
  console.log(event);
  emit("portfolioCreate", props.symbol);
};
</script>

<template>
  <form @submit="onSubmit">
    <input type="hidden" :value="symbol" readonly />
    <button type="submit" class="button">
      Add
    </button>
  </form>
</template>

<style scoped>
@import "./AddPortfolio.css";
</style>

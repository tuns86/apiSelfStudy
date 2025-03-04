<script setup lang="ts">
interface Props {
  symbol: string;
  portfolioDelete: (symbol: string) => void;
}

const props = defineProps<Props>();

const handleSubmit = (e: Event) => {
  e.preventDefault();
  props.portfolioDelete(props.symbol);
};
</script>

<template>
  <div>
    <form @submit="handleSubmit">
      <input type="hidden" name="symbol" :value="props.symbol" readonly />
      <button
        type="submit"
        class="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500"
      >
        X
      </button>
    </form>
  </div>
</template>

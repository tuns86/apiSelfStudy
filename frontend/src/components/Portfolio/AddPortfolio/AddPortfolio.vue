<script setup lang="ts">
interface Props {
  symbol: string;
  portfolioCreate: (symbol: string) => void;
}

const props = defineProps<Props>();

const handleSubmit = (e: Event) => {
  e.preventDefault();
  props.portfolioCreate(props.symbol);
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0"
  >
    <form @submit="handleSubmit">
      <input type="hidden" name="symbol" :value="symbol" readonly />
      <button
        type="submit"
        class="p-2 px-8 text-white bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none"
      >
        Add
      </button>
    </form>
  </div>
</template>

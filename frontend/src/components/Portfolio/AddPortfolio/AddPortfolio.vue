<script setup lang="ts">

interface Props {
  symbol: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "portfolioCreate", symbol: string): void;
}>();

const onSubmit = (event: Event) => {
  event.preventDefault();
  emit("portfolioCreate", props.symbol);
};
</script>

<template>
  <div class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
    <form @submit="onSubmit">
      <input type="hidden" name="symbol" :value="symbol" readonly />
      <button type="submit" class="p-2 px-8 text-white bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none">
        Add
      </button>
    </form>
  </div>
</template>

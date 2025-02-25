<script setup lang="ts">

interface Props {
  portfolioValue: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "portfolioDelete", symbol: string): void;
}>();

const onSubmit = (event: Event) => {
  event.preventDefault();
  emit("portfolioDelete", props.portfolioValue);
};
</script>

<template>
  <div>
    <form @submit="onSubmit">
      <input type="hidden" :value="portfolioValue" />
      <button type="submit"
        class="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
        X
      </button>
    </form>
  </div>
</template>

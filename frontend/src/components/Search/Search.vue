<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  onClick: (e: Event) => void;
  search: string | undefined;
  handleChange: (e: Event) => void;
}

const props = defineProps<Props>();
</script>

<template>
  <div>
    <input :value="props.search" @input="props.handleChange" placeholder="Search..." />
    <button @click="props.onClick">Button</button>
  </div>
</template>

<style scoped>
@import "@/assets/Search/Search.css";
</style>

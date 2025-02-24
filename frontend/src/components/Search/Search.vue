<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  onSearchSubmit: (e: Event) => void;
  search: string | undefined;
  handleSearchChange: (e: Event) => void;
}

const props = defineProps<Props>();
</script>

<template>
  <div>
    <form @submit="props.onSearchSubmit($event)">
      <input :value="props.search" @input="props.handleSearchChange($event)" />
    </form>
  </div>
</template>


<style scoped>
@import "./Search.css";
</style>

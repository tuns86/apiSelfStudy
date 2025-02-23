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
    <input :value="props.search" @input="props.handleChange" />
    <button @click="props.onClick">Tìm kiếm</button>
  </div>
</template>

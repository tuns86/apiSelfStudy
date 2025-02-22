<script setup lang="ts">
const props = defineProps<{
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}>();
</script>

<template>
  <div class="card">
    <img :src="imageUrl" alt="Product Image" />
    <div class="details">
      <h2>{{ title }}</h2>
      <p>${{ price }}</p>
    </div>
    <p class="info">{{ description }}</p>
  </div>
</template>


<style scoped>
@import "@/assets/Card/Card.css";
</style>

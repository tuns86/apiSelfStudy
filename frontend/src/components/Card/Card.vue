<script setup lang="ts">
interface Props {
  companyName: string;
  ticker: string;
  price: number;
};

const props = defineProps<Props>();
</script>

<template>
  <div class="card">
    <img
      src="https://images.unsplash.com/photo-1612428978260-2b9c7df20150?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
      alt="Image"
    />
    <div class="details">
      <h2>{{ props.companyName }} ({{ props.ticker }})</h2>
      <p>${{ props.price }}</p>
    </div>
    <p class="info">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, officia!
    </p>
  </div>
</template>


<style scoped>
@import "@/assets/Card/Card.css";
</style>

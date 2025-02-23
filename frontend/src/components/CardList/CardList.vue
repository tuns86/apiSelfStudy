<script setup lang="ts">
import Card from "@/components/Card/Card.vue";
</script>

<template>
  <div>
    <Card companyName="Apple" ticker="AAPL" :price="100" />
    <Card companyName="Microsoft" ticker="MSFT" :price="200" />
    <Card companyName="Tesla" ticker="TSLA" :price="300" />
  </div>
</template>

<style scoped>
@import "@/assets/CardList/CardList.css";
</style>

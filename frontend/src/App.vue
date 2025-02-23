<script setup lang="ts">
import CardList from "@/components/CardList/CardList.vue";
import { ref } from "vue";
import Search from "./components/Search/Search.vue";

const search = ref<string>("");

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  search.value = target.value;
  console.log(e);
};

const onClick = (e: Event) => {
  console.log(e);
};
</script>

<template>
  <div class="App">
    <Search :onClick="onClick" :search="search" :handleChange="handleChange" />
    <CardList />
  </div>
</template>

<style scoped>
@import "@/assets/App.css";
</style>

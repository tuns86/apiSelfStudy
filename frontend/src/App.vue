<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import { useAuthStore } from "@/context/UseAuth";
import { onMounted } from "vue";

const authStore = useAuthStore();

onMounted(() => {
  authStore.initAuth(); // Gọi hàm khởi tạo khi ứng dụng tải lên
});
</script>

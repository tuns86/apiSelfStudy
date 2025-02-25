<script setup lang="ts">
import { getCompanyProfile } from "@/api"; // Import API giống React
import type { CompanyProfile } from "@/company"; // Import kiểu dữ liệu
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

// Lấy `ticker` từ URL
const route = useRoute();
const ticker = route.params.ticker as string;

// Khai báo state
const company = ref<CompanyProfile | null>(null);

// Gọi API khi component được mount
onMounted(async () => {
  try {
    company.value = await getCompanyProfile(ticker); // ✅ Gán trực tiếp object vào company.value
  } catch (error) {
    console.error("Error fetching company profile:", error);
  }
});
</script>

<template>
  <div v-if="company" class="company-profile-container">
    {{ company.companyName }}
  </div>
  <div v-else>Company Not Found!</div>
</template>

